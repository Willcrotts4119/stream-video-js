import { createSubscriber } from './subscriber';
import {
  findOptimalVideoLayers,
  defaultVideoLayers,
  OptimalVideoLayer,
} from './videoLayers';
import { StreamSfuClient } from '../StreamSfuClient';
import {
  defaultVideoPublishEncodings,
  getPreferredCodecs,
  getReceiverCodecs,
  getSenderCodecs,
} from './codecs';
import { createPublisher } from './publisher';
import { CallState, VideoDimension } from '../gen/video/sfu/models/models';
import { handleICETrickle, registerEventHandlers } from './callEventHandlers';
import { SfuRequest } from '../gen/video/sfu/event/events';
import { SfuEventListener } from './Dispatcher';
import { StreamVideoWriteableStateStore } from '../stateStore';

export type CallOptions = {
  connectionConfig: RTCConfiguration | undefined;
};

export class Call {
  private readonly client: StreamSfuClient;
  private readonly options: CallOptions;
  participantMapping: { [key: string]: string } = {};

  /**@deprecated use store for this data */
  currentUserId: string;

  private videoLayers?: OptimalVideoLayer[];
  publisherCandidates: RTCIceCandidateInit[] = [];
  subscriberCandidates: RTCIceCandidateInit[] = [];
  subscriber: RTCPeerConnection | undefined;
  publisher: RTCPeerConnection | undefined;

  // FIXME: OL: convert to regular event
  handleOnTrack?: (e: RTCTrackEvent) => void;

  constructor(
    client: StreamSfuClient,
    options: CallOptions,
    private stateStore: StreamVideoWriteableStateStore,
  ) {
    this.client = client;
    this.options = options;
    this.currentUserId = stateStore.getCurrentValue(
      stateStore.connectedUserSubject,
    )!.name;

    this.client.dispatcher.on('iceTrickle', handleICETrickle(this));

    this.subscriber = createSubscriber({
      rpcClient: this.client,

      // FIXME: don't do this
      dispatcher: client.dispatcher,
      connectionConfig: this.options.connectionConfig,
      onTrack: (e) => {
        console.log('Got remote track:', e.track);
        this.handleOnTrack?.(e);
      },
      candidates: this.subscriberCandidates,
    });

    this.publisher = createPublisher({
      rpcClient: this.client,
      connectionConfig: this.options.connectionConfig,
      candidates: this.publisherCandidates,
    });

    registerEventHandlers(this);
  }

  // FIXME: change the call-sites in the SDK
  on = (eventName: string, fn: SfuEventListener) => {
    return this.client.dispatcher.on(eventName, fn);
  };
  // FIXME: change the call-sites in the SDK
  off = (eventName: string, fn: SfuEventListener) => {
    return this.client.dispatcher.off(eventName, fn);
  };

  leave = () => {
    this.subscriber?.close();

    this.publisher?.getSenders().forEach((s) => {
      s.track?.stop();
      this.publisher?.removeTrack(s);
    });
    this.publisher?.close();

    this.client.close();

    this.stateStore.activeCallSubject.next(undefined);
  };

  join = async (videoStream?: MediaStream) => {
    await this.client.signalReady;

    const [audioEncode, audioDecode, videoEncode, videoDecode] =
      await Promise.all([
        getSenderCodecs('audio'),
        getReceiverCodecs('audio', this.subscriber),
        getSenderCodecs('video'),
        getReceiverCodecs('video', this.subscriber),
      ]);

    this.videoLayers = videoStream
      ? await findOptimalVideoLayers(videoStream)
      : defaultVideoLayers;

    this.client.send(
      SfuRequest.create({
        requestPayload: {
          oneofKind: 'joinRequest',
          joinRequest: {
            sessionId: this.client.sessionId,
            token: this.client.token,
            // todo fix-me
            publish: true,
            // publish: true,
            // FIXME OL: encode parameters and video layers should be announced when
            // initiating "publish" operation
            codecSettings: {
              audio: {
                encodes: audioEncode,
                decodes: audioDecode,
              },
              video: {
                encodes: videoEncode,
                decodes: videoDecode,
              },
              layers: this.videoLayers.map((layer) => ({
                rid: layer.rid!,
                bitrate: layer.maxBitrate!,
                videoDimension: {
                  width: layer.width,
                  height: layer.height,
                },
              })),
            },
          },
        },
      }),
    );

    // FIXME: make it nicer
    return new Promise<CallState | undefined>((resolve) => {
      this.client.dispatcher.on('joinResponse', (event) => {
        if (event.eventPayload.oneofKind === 'joinResponse') {
          const { callState } = event.eventPayload.joinResponse;
          callState?.participants.forEach((p) => {
            this.participantMapping[p.trackLookupPrefix!] = p.user!.id;
          });
          this.client.keepAlive();
          resolve(callState);
        }
      });
    });
  };

  publish = (audioStream?: MediaStream, videoStream?: MediaStream) => {
    if (videoStream) {
      const videoEncodings: RTCRtpEncodingParameters[] =
        this.videoLayers && this.videoLayers.length > 0
          ? this.videoLayers
          : defaultVideoPublishEncodings;

      const [videoTrack] = videoStream.getVideoTracks();
      if (videoTrack) {
        const videoTransceiver = this.publisher?.addTransceiver(videoTrack, {
          direction: 'sendonly',
          streams: [videoStream],
          sendEncodings: videoEncodings,
        });

        const codecPreferences = getPreferredCodecs('video', 'vp8');
        // @ts-ignore
        if ('setCodecPreferences' in videoTransceiver && codecPreferences) {
          console.log(`set codec preferences`, codecPreferences);
          videoTransceiver.setCodecPreferences(codecPreferences);
        }
      }
    }

    if (audioStream) {
      const [audioTrack] = audioStream.getAudioTracks();
      if (audioTrack) {
        this.publisher?.addTransceiver(audioTrack, {
          direction: 'sendonly',
        });
      }
    }
  };

  changeInputDevice = async (
    kind: Exclude<MediaDeviceKind, 'audiooutput'>,
    deviceId: string,
    extras?: MediaTrackConstraints,
  ) => {
    if (!this.publisher) {
      // FIXME: OL: throw error instead?
      console.warn(
        `Can't change input device without publish connection established`,
        kind,
        deviceId,
      );
      return;
    }

    const constraints: MediaStreamConstraints = {};
    if (kind === 'audioinput') {
      constraints.audio = {
        ...extras,
        deviceId,
      };
    } else if (kind === 'videoinput') {
      constraints.video = {
        ...extras,
        deviceId,
      };
    }

    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    const [newTrack] =
      kind === 'videoinput'
        ? mediaStream.getVideoTracks()
        : mediaStream.getAudioTracks();

    const senders = this.publisher.getSenders();
    const sender = senders.find((s) => s.track?.kind === newTrack.kind);
    if (!sender || !sender.track || !newTrack) {
      // FIXME: OL: maybe start publishing in this case?
      console.warn(
        `Can't find a sender for track with kind`,
        newTrack,
        kind,
        senders,
      );
      return;
    }

    sender.track.stop(); // release old track
    await sender.replaceTrack(newTrack);

    return mediaStream; // for SDK use (preview video)
  };

  getActiveInputDeviceId = (kind: MediaDeviceKind) => {
    if (!this.publisher) return;

    const trackKind =
      kind === 'audioinput'
        ? 'audio'
        : kind === 'videoinput'
        ? 'video'
        : 'unknown';
    const senders = this.publisher.getSenders();
    const sender = senders.find((s) => s.track?.kind === trackKind);
    return sender?.track?.getConstraints().deviceId as string;
  };

  getStats = async (kind: 'subscriber' | 'publisher') => {
    if (kind === 'subscriber' && this.subscriber) {
      return this.subscriber.getStats();
    } else if (kind === 'publisher' && this.publisher) {
      return this.publisher.getStats();
    } else {
      console.warn(`Can't retrieve RTC stats for`, kind);
      return undefined;
    }
  };

  updateMuteState = (trackKind: 'audio' | 'video', isMute: boolean) => {
    if (!this.publisher) return;
    const senders = this.publisher.getSenders();
    const sender = senders.find((s) => s.track?.kind === trackKind);
    if (sender && sender.track) {
      sender.track.enabled = !isMute;

      if (trackKind === 'audio') {
        return this.client.updateAudioMuteState(isMute);
      } else if (trackKind === 'video') {
        return this.client.updateVideoMuteState(isMute);
      }
    }
  };

  updatePublishQuality = async (enabledRids: string[]) => {
    console.log(
      'Updating publish quality, qualities requested by SFU:',
      enabledRids,
    );
    const videoSender = this.publisher
      ?.getSenders()
      .find((s) => s.track?.kind === 'video');

    if (!videoSender) return;

    const params = await videoSender.getParameters();
    let changed = false;
    params.encodings.forEach((enc) => {
      console.log(enc.rid, enc.active);
      // flip 'active' flag only when necessary
      const shouldEnable = enabledRids.includes(enc.rid!);
      if (shouldEnable !== enc.active) {
        enc.active = shouldEnable;
        changed = true;
      }
    });
    if (changed) {
      if (params.encodings.length === 0) {
        console.warn('No suitable video encoding quality found');
      }
      await videoSender.setParameters(params);
    }
  };

  updateSubscriptions = async (subscriptions: {
    [key: string]: VideoDimension;
  }) => {
    return this.client.updateSubscriptions(subscriptions);
  };
}
