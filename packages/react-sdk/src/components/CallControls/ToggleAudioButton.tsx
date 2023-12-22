import { ComponentType } from 'react';
import { OwnCapability } from '@stream-io/video-client';
import {
  Restricted,
  useCallStateHooks,
  useI18n,
} from '@stream-io/video-react-bindings';
import { CompositeButton, IconButton } from '../Button';
import { PermissionNotification } from '../Notification';
import { useRequestPermission } from '../../hooks';

export type ToggleAudioPreviewButtonProps = {
  caption?: string;
  Menu?: ComponentType;
};

export const ToggleAudioPreviewButton = (
  props: ToggleAudioPreviewButtonProps,
) => {
  const { caption, Menu } = props;
  const { t } = useI18n();
  const { useMicrophoneState } = useCallStateHooks();
  const { microphone, isMute, hasBrowserPermission } = useMicrophoneState();

  return (
    <CompositeButton
      Menu={Menu}
      active={isMute}
      caption={caption}
      variant="secondary"
    >
      <IconButton
        icon={!isMute ? 'mic' : 'mic-off'}
        title={
          !hasBrowserPermission
            ? t('Check your browser audio permissions')
            : caption || t('Mic')
        }
        disabled={!hasBrowserPermission}
        data-testid={
          isMute ? 'preview-audio-unmute-button' : 'preview-audio-mute-button'
        }
        onClick={() => microphone.toggle()}
      />
      {!hasBrowserPermission && (
        <span className="str-video__no-media-permission">!</span>
      )}
    </CompositeButton>
  );
};

export type ToggleAudioPublishingButtonProps = {
  caption?: string;
  Menu?: ComponentType;
};

export const ToggleAudioPublishingButton = (
  props: ToggleAudioPublishingButtonProps,
) => {
  const { t } = useI18n();
  const { caption, Menu } = props;

  const { hasPermission, requestPermission, isAwaitingPermission } =
    useRequestPermission(OwnCapability.SEND_AUDIO);

  const { useMicrophoneState } = useCallStateHooks();
  const { microphone, isMute, hasBrowserPermission } = useMicrophoneState();

  return (
    <Restricted requiredGrants={[OwnCapability.SEND_AUDIO]}>
      <PermissionNotification
        permission={OwnCapability.SEND_AUDIO}
        isAwaitingApproval={isAwaitingPermission}
        messageApproved={t('You can now speak.')}
        messageAwaitingApproval={t('Awaiting for an approval to speak.')}
        messageRevoked={t('You can no longer speak.')}
      >
        <CompositeButton
          Menu={Menu}
          active={isMute}
          caption={caption}
          variant="secondary"
        >
          <IconButton
            icon={isMute ? 'mic-off' : 'mic'}
            title={
              !hasBrowserPermission || !hasPermission
                ? t('Check your browser mic permissions')
                : caption || t('Mic')
            }
            disabled={!hasBrowserPermission || !hasPermission}
            data-testid={isMute ? 'audio-unmute-button' : 'audio-mute-button'}
            onClick={async () => {
              if (!hasPermission) {
                await requestPermission();
              } else {
                await microphone.toggle();
              }
            }}
          />
          {(!hasBrowserPermission || !hasPermission) && (
            <span className="str-video__no-media-permission">!</span>
          )}
        </CompositeButton>
      </PermissionNotification>
    </Restricted>
  );
};
