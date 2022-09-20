/* eslint-disable */
// @generated by protobuf-ts 2.8.1 with parameter long_type_string,client_generic,server_none,eslint_disable
// @generated from protobuf file "video/coordinator/client_v1_rpc/websocket.proto" (package "stream.video.coordinator.client_v1_rpc", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { DeviceInput } from "../push_v1/push";
import { UserInput } from "../user_v1/user";
import { CallMembersDeleted } from "../event_v1/event";
import { CallMembersUpdated } from "../event_v1/event";
import { RecordingStopped } from "../event_v1/event";
import { RecordingStarted } from "../event_v1/event";
import { BroadcastEnded } from "../event_v1/event";
import { BroadcastStarted } from "../event_v1/event";
import { UserUpdated } from "../event_v1/event";
import { CallRinging } from "../event_v1/event";
import { CallDeleted } from "../event_v1/event";
import { CallEnded } from "../event_v1/event";
import { CallUpdated } from "../event_v1/event";
import { CallCreated } from "../event_v1/event";
import { CallDetails } from "../call_v1/call";
import { Call } from "../call_v1/call";
import { User } from "../user_v1/user";
/**
 * WebsocketEvent only includes events that are sent to the client via websocket connection
 * This is not an exhaustive list of events, since not all of them are sent via websocket
 *
 * @generated from protobuf message stream.video.coordinator.client_v1_rpc.WebsocketEvent
 */
export interface WebsocketEvent {
    /**
     * All users mentioned in the event payload, indexed by User.id
     *
     * @generated from protobuf field: map<string, stream.video.coordinator.user_v1.User> users = 1;
     */
    users: {
        [key: string]: User;
    };
    /**
     * All calls mentioned in the event payload, indexed by Call.call_cid
     *
     * @generated from protobuf field: map<string, stream.video.coordinator.call_v1.Call> calls = 2;
     */
    calls: {
        [key: string]: Call;
    };
    /**
     * All calls envelopes for calls mentioned in the event payload, indexed by Call.call_cid
     * The envelope may not contain some of the entities (like, members), but the message is guaranteed to be present if there's a matching Call in calls map
     *
     * @generated from protobuf field: map<string, stream.video.coordinator.call_v1.CallDetails> call_details = 3;
     */
    callDetails: {
        [key: string]: CallDetails;
    };
    /**
     * @generated from protobuf oneof: event
     */
    event: {
        oneofKind: "healthcheck";
        /**
         * @generated from protobuf field: stream.video.coordinator.client_v1_rpc.WebsocketHealthcheck healthcheck = 20;
         */
        healthcheck: WebsocketHealthcheck;
    } | {
        oneofKind: "callCreated";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.CallCreated call_created = 21;
         */
        callCreated: CallCreated;
    } | {
        oneofKind: "callUpdated";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.CallUpdated call_updated = 22;
         */
        callUpdated: CallUpdated;
    } | {
        oneofKind: "callEnded";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.CallEnded call_ended = 23;
         */
        callEnded: CallEnded;
    } | {
        oneofKind: "callDeleted";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.CallDeleted call_deleted = 24;
         */
        callDeleted: CallDeleted;
    } | {
        oneofKind: "callRinging";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.CallRinging call_ringing = 25;
         */
        callRinging: CallRinging;
    } | {
        oneofKind: "userUpdated";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.UserUpdated user_updated = 26;
         */
        userUpdated: UserUpdated;
    } | {
        oneofKind: "broadcastStarted";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.BroadcastStarted broadcast_started = 27;
         */
        broadcastStarted: BroadcastStarted;
    } | {
        oneofKind: "broadcastEnded";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.BroadcastEnded broadcast_ended = 28;
         */
        broadcastEnded: BroadcastEnded;
    } | {
        oneofKind: "recordingStarted";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.RecordingStarted recording_started = 29;
         */
        recordingStarted: RecordingStarted;
    } | {
        oneofKind: "recordingStopped";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.RecordingStopped recording_stopped = 30;
         */
        recordingStopped: RecordingStopped;
    } | {
        oneofKind: "callMembersUpdated";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.CallMembersUpdated call_members_updated = 31;
         */
        callMembersUpdated: CallMembersUpdated;
    } | {
        oneofKind: "callMembersDeleted";
        /**
         * @generated from protobuf field: stream.video.coordinator.event_v1.CallMembersDeleted call_members_deleted = 32;
         */
        callMembersDeleted: CallMembersDeleted;
    } | {
        oneofKind: undefined;
    };
}
/**
 * WebsocketClientEvent contains all events that client is allowed to send to the server
 * When clients sends any of mentioned events, they should be wrapped into ClientEvent
 *
 * @generated from protobuf message stream.video.coordinator.client_v1_rpc.WebsocketClientEvent
 */
export interface WebsocketClientEvent {
    /**
     * @generated from protobuf oneof: event
     */
    event: {
        oneofKind: "healthcheck";
        /**
         * @generated from protobuf field: stream.video.coordinator.client_v1_rpc.WebsocketHealthcheck healthcheck = 1;
         */
        healthcheck: WebsocketHealthcheck;
    } | {
        oneofKind: "authRequest";
        /**
         * @generated from protobuf field: stream.video.coordinator.client_v1_rpc.WebsocketAuthRequest auth_request = 2;
         */
        authRequest: WebsocketAuthRequest;
    } | {
        oneofKind: undefined;
    };
}
/**
 * A payload that is sent through websocket to authenticate a connection
 *
 * @generated from protobuf message stream.video.coordinator.client_v1_rpc.WebsocketAuthRequest
 */
export interface WebsocketAuthRequest {
    /**
     * Application API key that matches a secret is used to sign a token
     *
     * @generated from protobuf field: string api_key = 1;
     */
    apiKey: string;
    /**
     * A client JWT token
     *
     * @generated from protobuf field: string token = 2;
     */
    token: string;
    /**
     * Optional UserInput. When present, it is used to create or update user information.
     * If contains some changes, a permission check will be performed
     *
     * @generated from protobuf field: stream.video.coordinator.user_v1.UserInput user = 3;
     */
    user?: UserInput;
    /**
     * Optional DeviceInput. When present, a device will be created for a user. If device
     * already exists, nothing will happen
     *
     * @generated from protobuf field: stream.video.coordinator.push_v1.DeviceInput device = 4;
     */
    device?: DeviceInput;
}
/**
 * Healthckeck is sent back and forth between websocket client and server
 * When server sends a healthcheck, it is wrapped into WebsocketEvent
 * When client sends healthcheck, it should be wrapped into WebsocketClientEvent
 *
 * @generated from protobuf message stream.video.coordinator.client_v1_rpc.WebsocketHealthcheck
 */
export interface WebsocketHealthcheck {
    /**
     * @generated from protobuf field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from protobuf field: string client_id = 2;
     */
    clientId: string;
    /**
     * @generated from protobuf field: string call_type = 3;
     */
    callType: string;
    /**
     * @generated from protobuf field: string call_id = 4;
     */
    callId: string;
    /**
     * @generated from protobuf field: bool video = 5;
     */
    video: boolean;
    /**
     * @generated from protobuf field: bool audio = 6;
     */
    audio: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class WebsocketEvent$Type extends MessageType<WebsocketEvent> {
    constructor() {
        super("stream.video.coordinator.client_v1_rpc.WebsocketEvent", [
            { no: 1, name: "users", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => User } },
            { no: 2, name: "calls", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => Call } },
            { no: 3, name: "call_details", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => CallDetails } },
            { no: 20, name: "healthcheck", kind: "message", oneof: "event", T: () => WebsocketHealthcheck },
            { no: 21, name: "call_created", kind: "message", oneof: "event", T: () => CallCreated },
            { no: 22, name: "call_updated", kind: "message", oneof: "event", T: () => CallUpdated },
            { no: 23, name: "call_ended", kind: "message", oneof: "event", T: () => CallEnded },
            { no: 24, name: "call_deleted", kind: "message", oneof: "event", T: () => CallDeleted },
            { no: 25, name: "call_ringing", kind: "message", oneof: "event", T: () => CallRinging },
            { no: 26, name: "user_updated", kind: "message", oneof: "event", T: () => UserUpdated },
            { no: 27, name: "broadcast_started", kind: "message", oneof: "event", T: () => BroadcastStarted },
            { no: 28, name: "broadcast_ended", kind: "message", oneof: "event", T: () => BroadcastEnded },
            { no: 29, name: "recording_started", kind: "message", oneof: "event", T: () => RecordingStarted },
            { no: 30, name: "recording_stopped", kind: "message", oneof: "event", T: () => RecordingStopped },
            { no: 31, name: "call_members_updated", kind: "message", oneof: "event", T: () => CallMembersUpdated },
            { no: 32, name: "call_members_deleted", kind: "message", oneof: "event", T: () => CallMembersDeleted }
        ]);
    }
    create(value?: PartialMessage<WebsocketEvent>): WebsocketEvent {
        const message = { users: {}, calls: {}, callDetails: {}, event: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WebsocketEvent>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WebsocketEvent): WebsocketEvent {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, stream.video.coordinator.user_v1.User> users */ 1:
                    this.binaryReadMap1(message.users, reader, options);
                    break;
                case /* map<string, stream.video.coordinator.call_v1.Call> calls */ 2:
                    this.binaryReadMap2(message.calls, reader, options);
                    break;
                case /* map<string, stream.video.coordinator.call_v1.CallDetails> call_details */ 3:
                    this.binaryReadMap3(message.callDetails, reader, options);
                    break;
                case /* stream.video.coordinator.client_v1_rpc.WebsocketHealthcheck healthcheck */ 20:
                    message.event = {
                        oneofKind: "healthcheck",
                        healthcheck: WebsocketHealthcheck.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).healthcheck)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.CallCreated call_created */ 21:
                    message.event = {
                        oneofKind: "callCreated",
                        callCreated: CallCreated.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).callCreated)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.CallUpdated call_updated */ 22:
                    message.event = {
                        oneofKind: "callUpdated",
                        callUpdated: CallUpdated.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).callUpdated)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.CallEnded call_ended */ 23:
                    message.event = {
                        oneofKind: "callEnded",
                        callEnded: CallEnded.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).callEnded)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.CallDeleted call_deleted */ 24:
                    message.event = {
                        oneofKind: "callDeleted",
                        callDeleted: CallDeleted.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).callDeleted)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.CallRinging call_ringing */ 25:
                    message.event = {
                        oneofKind: "callRinging",
                        callRinging: CallRinging.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).callRinging)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.UserUpdated user_updated */ 26:
                    message.event = {
                        oneofKind: "userUpdated",
                        userUpdated: UserUpdated.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).userUpdated)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.BroadcastStarted broadcast_started */ 27:
                    message.event = {
                        oneofKind: "broadcastStarted",
                        broadcastStarted: BroadcastStarted.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).broadcastStarted)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.BroadcastEnded broadcast_ended */ 28:
                    message.event = {
                        oneofKind: "broadcastEnded",
                        broadcastEnded: BroadcastEnded.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).broadcastEnded)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.RecordingStarted recording_started */ 29:
                    message.event = {
                        oneofKind: "recordingStarted",
                        recordingStarted: RecordingStarted.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).recordingStarted)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.RecordingStopped recording_stopped */ 30:
                    message.event = {
                        oneofKind: "recordingStopped",
                        recordingStopped: RecordingStopped.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).recordingStopped)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.CallMembersUpdated call_members_updated */ 31:
                    message.event = {
                        oneofKind: "callMembersUpdated",
                        callMembersUpdated: CallMembersUpdated.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).callMembersUpdated)
                    };
                    break;
                case /* stream.video.coordinator.event_v1.CallMembersDeleted call_members_deleted */ 32:
                    message.event = {
                        oneofKind: "callMembersDeleted",
                        callMembersDeleted: CallMembersDeleted.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).callMembersDeleted)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    private binaryReadMap1(map: WebsocketEvent["users"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof WebsocketEvent["users"] | undefined, val: WebsocketEvent["users"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = User.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field stream.video.coordinator.client_v1_rpc.WebsocketEvent.users");
            }
        }
        map[key ?? ""] = val ?? User.create();
    }
    private binaryReadMap2(map: WebsocketEvent["calls"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof WebsocketEvent["calls"] | undefined, val: WebsocketEvent["calls"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = Call.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field stream.video.coordinator.client_v1_rpc.WebsocketEvent.calls");
            }
        }
        map[key ?? ""] = val ?? Call.create();
    }
    private binaryReadMap3(map: WebsocketEvent["callDetails"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof WebsocketEvent["callDetails"] | undefined, val: WebsocketEvent["callDetails"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = CallDetails.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field stream.video.coordinator.client_v1_rpc.WebsocketEvent.call_details");
            }
        }
        map[key ?? ""] = val ?? CallDetails.create();
    }
    internalBinaryWrite(message: WebsocketEvent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<string, stream.video.coordinator.user_v1.User> users = 1; */
        for (let k of Object.keys(message.users)) {
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            User.internalBinaryWrite(message.users[k], writer, options);
            writer.join().join();
        }
        /* map<string, stream.video.coordinator.call_v1.Call> calls = 2; */
        for (let k of Object.keys(message.calls)) {
            writer.tag(2, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            Call.internalBinaryWrite(message.calls[k], writer, options);
            writer.join().join();
        }
        /* map<string, stream.video.coordinator.call_v1.CallDetails> call_details = 3; */
        for (let k of Object.keys(message.callDetails)) {
            writer.tag(3, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            CallDetails.internalBinaryWrite(message.callDetails[k], writer, options);
            writer.join().join();
        }
        /* stream.video.coordinator.client_v1_rpc.WebsocketHealthcheck healthcheck = 20; */
        if (message.event.oneofKind === "healthcheck")
            WebsocketHealthcheck.internalBinaryWrite(message.event.healthcheck, writer.tag(20, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.CallCreated call_created = 21; */
        if (message.event.oneofKind === "callCreated")
            CallCreated.internalBinaryWrite(message.event.callCreated, writer.tag(21, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.CallUpdated call_updated = 22; */
        if (message.event.oneofKind === "callUpdated")
            CallUpdated.internalBinaryWrite(message.event.callUpdated, writer.tag(22, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.CallEnded call_ended = 23; */
        if (message.event.oneofKind === "callEnded")
            CallEnded.internalBinaryWrite(message.event.callEnded, writer.tag(23, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.CallDeleted call_deleted = 24; */
        if (message.event.oneofKind === "callDeleted")
            CallDeleted.internalBinaryWrite(message.event.callDeleted, writer.tag(24, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.CallRinging call_ringing = 25; */
        if (message.event.oneofKind === "callRinging")
            CallRinging.internalBinaryWrite(message.event.callRinging, writer.tag(25, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.UserUpdated user_updated = 26; */
        if (message.event.oneofKind === "userUpdated")
            UserUpdated.internalBinaryWrite(message.event.userUpdated, writer.tag(26, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.BroadcastStarted broadcast_started = 27; */
        if (message.event.oneofKind === "broadcastStarted")
            BroadcastStarted.internalBinaryWrite(message.event.broadcastStarted, writer.tag(27, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.BroadcastEnded broadcast_ended = 28; */
        if (message.event.oneofKind === "broadcastEnded")
            BroadcastEnded.internalBinaryWrite(message.event.broadcastEnded, writer.tag(28, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.RecordingStarted recording_started = 29; */
        if (message.event.oneofKind === "recordingStarted")
            RecordingStarted.internalBinaryWrite(message.event.recordingStarted, writer.tag(29, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.RecordingStopped recording_stopped = 30; */
        if (message.event.oneofKind === "recordingStopped")
            RecordingStopped.internalBinaryWrite(message.event.recordingStopped, writer.tag(30, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.CallMembersUpdated call_members_updated = 31; */
        if (message.event.oneofKind === "callMembersUpdated")
            CallMembersUpdated.internalBinaryWrite(message.event.callMembersUpdated, writer.tag(31, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.event_v1.CallMembersDeleted call_members_deleted = 32; */
        if (message.event.oneofKind === "callMembersDeleted")
            CallMembersDeleted.internalBinaryWrite(message.event.callMembersDeleted, writer.tag(32, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.client_v1_rpc.WebsocketEvent
 */
export const WebsocketEvent = new WebsocketEvent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WebsocketClientEvent$Type extends MessageType<WebsocketClientEvent> {
    constructor() {
        super("stream.video.coordinator.client_v1_rpc.WebsocketClientEvent", [
            { no: 1, name: "healthcheck", kind: "message", oneof: "event", T: () => WebsocketHealthcheck },
            { no: 2, name: "auth_request", kind: "message", oneof: "event", T: () => WebsocketAuthRequest }
        ]);
    }
    create(value?: PartialMessage<WebsocketClientEvent>): WebsocketClientEvent {
        const message = { event: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WebsocketClientEvent>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WebsocketClientEvent): WebsocketClientEvent {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* stream.video.coordinator.client_v1_rpc.WebsocketHealthcheck healthcheck */ 1:
                    message.event = {
                        oneofKind: "healthcheck",
                        healthcheck: WebsocketHealthcheck.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).healthcheck)
                    };
                    break;
                case /* stream.video.coordinator.client_v1_rpc.WebsocketAuthRequest auth_request */ 2:
                    message.event = {
                        oneofKind: "authRequest",
                        authRequest: WebsocketAuthRequest.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).authRequest)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: WebsocketClientEvent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* stream.video.coordinator.client_v1_rpc.WebsocketHealthcheck healthcheck = 1; */
        if (message.event.oneofKind === "healthcheck")
            WebsocketHealthcheck.internalBinaryWrite(message.event.healthcheck, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.client_v1_rpc.WebsocketAuthRequest auth_request = 2; */
        if (message.event.oneofKind === "authRequest")
            WebsocketAuthRequest.internalBinaryWrite(message.event.authRequest, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.client_v1_rpc.WebsocketClientEvent
 */
export const WebsocketClientEvent = new WebsocketClientEvent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WebsocketAuthRequest$Type extends MessageType<WebsocketAuthRequest> {
    constructor() {
        super("stream.video.coordinator.client_v1_rpc.WebsocketAuthRequest", [
            { no: 1, name: "api_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "user", kind: "message", T: () => UserInput },
            { no: 4, name: "device", kind: "message", T: () => DeviceInput }
        ]);
    }
    create(value?: PartialMessage<WebsocketAuthRequest>): WebsocketAuthRequest {
        const message = { apiKey: "", token: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WebsocketAuthRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WebsocketAuthRequest): WebsocketAuthRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string api_key */ 1:
                    message.apiKey = reader.string();
                    break;
                case /* string token */ 2:
                    message.token = reader.string();
                    break;
                case /* stream.video.coordinator.user_v1.UserInput user */ 3:
                    message.user = UserInput.internalBinaryRead(reader, reader.uint32(), options, message.user);
                    break;
                case /* stream.video.coordinator.push_v1.DeviceInput device */ 4:
                    message.device = DeviceInput.internalBinaryRead(reader, reader.uint32(), options, message.device);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: WebsocketAuthRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string api_key = 1; */
        if (message.apiKey !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.apiKey);
        /* string token = 2; */
        if (message.token !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.token);
        /* stream.video.coordinator.user_v1.UserInput user = 3; */
        if (message.user)
            UserInput.internalBinaryWrite(message.user, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.push_v1.DeviceInput device = 4; */
        if (message.device)
            DeviceInput.internalBinaryWrite(message.device, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.client_v1_rpc.WebsocketAuthRequest
 */
export const WebsocketAuthRequest = new WebsocketAuthRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WebsocketHealthcheck$Type extends MessageType<WebsocketHealthcheck> {
    constructor() {
        super("stream.video.coordinator.client_v1_rpc.WebsocketHealthcheck", [
            { no: 1, name: "user_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "client_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "call_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "call_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "video", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "audio", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<WebsocketHealthcheck>): WebsocketHealthcheck {
        const message = { userId: "", clientId: "", callType: "", callId: "", video: false, audio: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WebsocketHealthcheck>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WebsocketHealthcheck): WebsocketHealthcheck {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string user_id */ 1:
                    message.userId = reader.string();
                    break;
                case /* string client_id */ 2:
                    message.clientId = reader.string();
                    break;
                case /* string call_type */ 3:
                    message.callType = reader.string();
                    break;
                case /* string call_id */ 4:
                    message.callId = reader.string();
                    break;
                case /* bool video */ 5:
                    message.video = reader.bool();
                    break;
                case /* bool audio */ 6:
                    message.audio = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: WebsocketHealthcheck, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string user_id = 1; */
        if (message.userId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.userId);
        /* string client_id = 2; */
        if (message.clientId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.clientId);
        /* string call_type = 3; */
        if (message.callType !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.callType);
        /* string call_id = 4; */
        if (message.callId !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.callId);
        /* bool video = 5; */
        if (message.video !== false)
            writer.tag(5, WireType.Varint).bool(message.video);
        /* bool audio = 6; */
        if (message.audio !== false)
            writer.tag(6, WireType.Varint).bool(message.audio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.client_v1_rpc.WebsocketHealthcheck
 */
export const WebsocketHealthcheck = new WebsocketHealthcheck$Type();
