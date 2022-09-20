/* eslint-disable */
// @generated by protobuf-ts 2.8.1 with parameter long_type_string,client_generic,server_none,eslint_disable
// @generated from protobuf file "video/coordinator/call_v1/call.proto" (package "stream.video.coordinator.call_v1", syntax proto3)
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
import { Member } from "../member_v1/member";
import { Timestamp } from "../../../google/protobuf/timestamp";
/**
 * @generated from protobuf message stream.video.coordinator.call_v1.CallType
 */
export interface CallType {
    /**
     * The unique name for the call type.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: stream.video.coordinator.call_v1.CallOptions options = 2;
     */
    options?: CallOptions;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 3;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 4;
     */
    updatedAt?: Timestamp;
}
/**
 * @generated from protobuf message stream.video.coordinator.call_v1.Call
 */
export interface Call {
    /**
     * The call type.
     *
     * @generated from protobuf field: string type = 1;
     */
    type: string;
    /**
     * The call id.
     *
     * @generated from protobuf field: string id = 2;
     */
    id: string;
    /**
     * A concatenation of call type and call id with ":" inbetween
     *
     * @generated from protobuf field: string call_cid = 3;
     */
    callCid: string;
    /**
     * The id of the user that created this room.
     *
     * @generated from protobuf field: string created_by_user_id = 4;
     */
    createdByUserId: string;
    /**
     * @generated from protobuf field: bytes custom_json = 5;
     */
    customJson: Uint8Array;
    /**
     * Room options that are set explicitly in this room
     * This set of options does not include RoomType options
     *
     * @generated from protobuf field: stream.video.coordinator.call_v1.CallOptions options = 6;
     */
    options?: CallOptions;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 7;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated_at = 8;
     */
    updatedAt?: Timestamp;
}
/**
 * CallDetails contains call additional details
 *
 * @generated from protobuf message stream.video.coordinator.call_v1.CallDetails
 */
export interface CallDetails {
    /**
     * Call options merged with CallType options
     *
     * @generated from protobuf field: stream.video.coordinator.call_v1.CallOptions options = 1;
     */
    options?: CallOptions;
    /**
     * Ordered list of member user IDs
     *
     * @generated from protobuf field: repeated string member_user_ids = 2;
     */
    memberUserIds: string[];
    /**
     * Room members map indexed by Member.user_id
     * Cannot have more than 100 members
     *
     * @generated from protobuf field: map<string, stream.video.coordinator.member_v1.Member> members = 3;
     */
    members: {
        [key: string]: Member;
    };
}
/**
 * CallOptions contains all options available to change for the RoomType
 * Options can also be set on the room level where they will be merged with RoomType options using `proto.Merge`
 * To make sure options can be overriden on the room level, all underlying option fields should be optional
 *
 * @generated from protobuf message stream.video.coordinator.call_v1.CallOptions
 */
export interface CallOptions {
    /**
     * @generated from protobuf field: stream.video.coordinator.call_v1.RecordingOptions recording = 1;
     */
    recording?: RecordingOptions;
    /**
     * @generated from protobuf field: stream.video.coordinator.call_v1.BroadcastingOptions broadcasting = 2;
     */
    broadcasting?: BroadcastingOptions;
    /**
     * @generated from protobuf field: stream.video.coordinator.call_v1.TranscriptionOptions transcription = 3;
     */
    transcription?: TranscriptionOptions;
}
/**
 * Contains all options regarding to call recording
 *
 * @generated from protobuf message stream.video.coordinator.call_v1.RecordingOptions
 */
export interface RecordingOptions {
    /**
     * Whether recording feature is enabled
     * Default: false
     *
     * @generated from protobuf field: optional bool enabled = 1;
     */
    enabled?: boolean;
}
/**
 * Contains all options regarding to call broadcasting
 *
 * @generated from protobuf message stream.video.coordinator.call_v1.BroadcastingOptions
 */
export interface BroadcastingOptions {
    /**
     * Whether broadcasting feature is enabled
     * Default: false
     *
     * @generated from protobuf field: optional bool enabled = 1;
     */
    enabled?: boolean;
}
/**
 * Contains all options regarding to call transcription
 *
 * @generated from protobuf message stream.video.coordinator.call_v1.TranscriptionOptions
 */
export interface TranscriptionOptions {
    /**
     * Whether transcription feature is enabled
     * Default: false
     *
     * @generated from protobuf field: optional bool enabled = 1;
     */
    enabled?: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class CallType$Type extends MessageType<CallType> {
    constructor() {
        super("stream.video.coordinator.call_v1.CallType", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "options", kind: "message", T: () => CallOptions },
            { no: 3, name: "created_at", kind: "message", T: () => Timestamp },
            { no: 4, name: "updated_at", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<CallType>): CallType {
        const message = { name: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CallType>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CallType): CallType {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* stream.video.coordinator.call_v1.CallOptions options */ 2:
                    message.options = CallOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                case /* google.protobuf.Timestamp created_at */ 3:
                    message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* google.protobuf.Timestamp updated_at */ 4:
                    message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
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
    internalBinaryWrite(message: CallType, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* stream.video.coordinator.call_v1.CallOptions options = 2; */
        if (message.options)
            CallOptions.internalBinaryWrite(message.options, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp created_at = 3; */
        if (message.createdAt)
            Timestamp.internalBinaryWrite(message.createdAt, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp updated_at = 4; */
        if (message.updatedAt)
            Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.call_v1.CallType
 */
export const CallType = new CallType$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Call$Type extends MessageType<Call> {
    constructor() {
        super("stream.video.coordinator.call_v1.Call", [
            { no: 1, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 3, name: "call_cid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "created_by_user_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 5, name: "custom_json", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 6, name: "options", kind: "message", T: () => CallOptions },
            { no: 7, name: "created_at", kind: "message", T: () => Timestamp },
            { no: 8, name: "updated_at", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<Call>): Call {
        const message = { type: "", id: "", callCid: "", createdByUserId: "", customJson: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Call>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Call): Call {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string type */ 1:
                    message.type = reader.string();
                    break;
                case /* string id */ 2:
                    message.id = reader.string();
                    break;
                case /* string call_cid */ 3:
                    message.callCid = reader.string();
                    break;
                case /* string created_by_user_id */ 4:
                    message.createdByUserId = reader.string();
                    break;
                case /* bytes custom_json */ 5:
                    message.customJson = reader.bytes();
                    break;
                case /* stream.video.coordinator.call_v1.CallOptions options */ 6:
                    message.options = CallOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                case /* google.protobuf.Timestamp created_at */ 7:
                    message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* google.protobuf.Timestamp updated_at */ 8:
                    message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
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
    internalBinaryWrite(message: Call, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string type = 1; */
        if (message.type !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.type);
        /* string id = 2; */
        if (message.id !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.id);
        /* string call_cid = 3; */
        if (message.callCid !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.callCid);
        /* string created_by_user_id = 4; */
        if (message.createdByUserId !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.createdByUserId);
        /* bytes custom_json = 5; */
        if (message.customJson.length)
            writer.tag(5, WireType.LengthDelimited).bytes(message.customJson);
        /* stream.video.coordinator.call_v1.CallOptions options = 6; */
        if (message.options)
            CallOptions.internalBinaryWrite(message.options, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp created_at = 7; */
        if (message.createdAt)
            Timestamp.internalBinaryWrite(message.createdAt, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp updated_at = 8; */
        if (message.updatedAt)
            Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.call_v1.Call
 */
export const Call = new Call$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CallDetails$Type extends MessageType<CallDetails> {
    constructor() {
        super("stream.video.coordinator.call_v1.CallDetails", [
            { no: 1, name: "options", kind: "message", T: () => CallOptions },
            { no: 2, name: "member_user_ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "members", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => Member } }
        ]);
    }
    create(value?: PartialMessage<CallDetails>): CallDetails {
        const message = { memberUserIds: [], members: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CallDetails>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CallDetails): CallDetails {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* stream.video.coordinator.call_v1.CallOptions options */ 1:
                    message.options = CallOptions.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                case /* repeated string member_user_ids */ 2:
                    message.memberUserIds.push(reader.string());
                    break;
                case /* map<string, stream.video.coordinator.member_v1.Member> members */ 3:
                    this.binaryReadMap3(message.members, reader, options);
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
    private binaryReadMap3(map: CallDetails["members"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof CallDetails["members"] | undefined, val: CallDetails["members"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = Member.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field stream.video.coordinator.call_v1.CallDetails.members");
            }
        }
        map[key ?? ""] = val ?? Member.create();
    }
    internalBinaryWrite(message: CallDetails, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* stream.video.coordinator.call_v1.CallOptions options = 1; */
        if (message.options)
            CallOptions.internalBinaryWrite(message.options, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated string member_user_ids = 2; */
        for (let i = 0; i < message.memberUserIds.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.memberUserIds[i]);
        /* map<string, stream.video.coordinator.member_v1.Member> members = 3; */
        for (let k of Object.keys(message.members)) {
            writer.tag(3, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            Member.internalBinaryWrite(message.members[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.call_v1.CallDetails
 */
export const CallDetails = new CallDetails$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CallOptions$Type extends MessageType<CallOptions> {
    constructor() {
        super("stream.video.coordinator.call_v1.CallOptions", [
            { no: 1, name: "recording", kind: "message", T: () => RecordingOptions },
            { no: 2, name: "broadcasting", kind: "message", T: () => BroadcastingOptions },
            { no: 3, name: "transcription", kind: "message", T: () => TranscriptionOptions }
        ]);
    }
    create(value?: PartialMessage<CallOptions>): CallOptions {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CallOptions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CallOptions): CallOptions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* stream.video.coordinator.call_v1.RecordingOptions recording */ 1:
                    message.recording = RecordingOptions.internalBinaryRead(reader, reader.uint32(), options, message.recording);
                    break;
                case /* stream.video.coordinator.call_v1.BroadcastingOptions broadcasting */ 2:
                    message.broadcasting = BroadcastingOptions.internalBinaryRead(reader, reader.uint32(), options, message.broadcasting);
                    break;
                case /* stream.video.coordinator.call_v1.TranscriptionOptions transcription */ 3:
                    message.transcription = TranscriptionOptions.internalBinaryRead(reader, reader.uint32(), options, message.transcription);
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
    internalBinaryWrite(message: CallOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* stream.video.coordinator.call_v1.RecordingOptions recording = 1; */
        if (message.recording)
            RecordingOptions.internalBinaryWrite(message.recording, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.call_v1.BroadcastingOptions broadcasting = 2; */
        if (message.broadcasting)
            BroadcastingOptions.internalBinaryWrite(message.broadcasting, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.call_v1.TranscriptionOptions transcription = 3; */
        if (message.transcription)
            TranscriptionOptions.internalBinaryWrite(message.transcription, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.call_v1.CallOptions
 */
export const CallOptions = new CallOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RecordingOptions$Type extends MessageType<RecordingOptions> {
    constructor() {
        super("stream.video.coordinator.call_v1.RecordingOptions", [
            { no: 1, name: "enabled", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<RecordingOptions>): RecordingOptions {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RecordingOptions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RecordingOptions): RecordingOptions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool enabled */ 1:
                    message.enabled = reader.bool();
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
    internalBinaryWrite(message: RecordingOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional bool enabled = 1; */
        if (message.enabled !== undefined)
            writer.tag(1, WireType.Varint).bool(message.enabled);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.call_v1.RecordingOptions
 */
export const RecordingOptions = new RecordingOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BroadcastingOptions$Type extends MessageType<BroadcastingOptions> {
    constructor() {
        super("stream.video.coordinator.call_v1.BroadcastingOptions", [
            { no: 1, name: "enabled", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<BroadcastingOptions>): BroadcastingOptions {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BroadcastingOptions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BroadcastingOptions): BroadcastingOptions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool enabled */ 1:
                    message.enabled = reader.bool();
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
    internalBinaryWrite(message: BroadcastingOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional bool enabled = 1; */
        if (message.enabled !== undefined)
            writer.tag(1, WireType.Varint).bool(message.enabled);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.call_v1.BroadcastingOptions
 */
export const BroadcastingOptions = new BroadcastingOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TranscriptionOptions$Type extends MessageType<TranscriptionOptions> {
    constructor() {
        super("stream.video.coordinator.call_v1.TranscriptionOptions", [
            { no: 1, name: "enabled", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<TranscriptionOptions>): TranscriptionOptions {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TranscriptionOptions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TranscriptionOptions): TranscriptionOptions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool enabled */ 1:
                    message.enabled = reader.bool();
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
    internalBinaryWrite(message: TranscriptionOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional bool enabled = 1; */
        if (message.enabled !== undefined)
            writer.tag(1, WireType.Varint).bool(message.enabled);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.call_v1.TranscriptionOptions
 */
export const TranscriptionOptions = new TranscriptionOptions$Type();
