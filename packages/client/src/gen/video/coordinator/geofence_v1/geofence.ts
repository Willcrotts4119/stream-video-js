/* eslint-disable */
// @generated by protobuf-ts 2.8.1 with parameter long_type_string,client_generic,server_none,eslint_disable
// @generated from protobuf file "video/coordinator/geofence_v1/geofence.proto" (package "stream.video.coordinator.geofence_v1", syntax proto3)
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
/**
 * @generated from protobuf message stream.video.coordinator.geofence_v1.Geofence
 */
export interface Geofence {
    /**
     * Unique name of the geofence.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Type of the geofence, to included or to exclude the countries.
     *
     * @generated from protobuf field: stream.video.coordinator.geofence_v1.GeofenceType type = 2;
     */
    type: GeofenceType;
    /**
     * Alpha-2 country codes to be included or excluded.
     *
     * @generated from protobuf field: repeated string country_codes = 3;
     */
    countryCodes: string[];
    /**
     * Description of the geofence.
     *
     * @generated from protobuf field: string description = 4;
     */
    description: string;
}
/**
 * @generated from protobuf enum stream.video.coordinator.geofence_v1.GeofenceType
 */
export enum GeofenceType {
    /**
     * @generated from protobuf enum value: GEOFENCE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: GEOFENCE_TYPE_INCLUSION = 1;
     */
    INCLUSION = 1,
    /**
     * @generated from protobuf enum value: GEOFENCE_TYPE_EXCLUSION = 2;
     */
    EXCLUSION = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class Geofence$Type extends MessageType<Geofence> {
    constructor() {
        super("stream.video.coordinator.geofence_v1.Geofence", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "type", kind: "enum", T: () => ["stream.video.coordinator.geofence_v1.GeofenceType", GeofenceType, "GEOFENCE_TYPE_"] },
            { no: 3, name: "country_codes", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Geofence>): Geofence {
        const message = { name: "", type: 0, countryCodes: [], description: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Geofence>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Geofence): Geofence {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* stream.video.coordinator.geofence_v1.GeofenceType type */ 2:
                    message.type = reader.int32();
                    break;
                case /* repeated string country_codes */ 3:
                    message.countryCodes.push(reader.string());
                    break;
                case /* string description */ 4:
                    message.description = reader.string();
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
    internalBinaryWrite(message: Geofence, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* stream.video.coordinator.geofence_v1.GeofenceType type = 2; */
        if (message.type !== 0)
            writer.tag(2, WireType.Varint).int32(message.type);
        /* repeated string country_codes = 3; */
        for (let i = 0; i < message.countryCodes.length; i++)
            writer.tag(3, WireType.LengthDelimited).string(message.countryCodes[i]);
        /* string description = 4; */
        if (message.description !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.description);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.geofence_v1.Geofence
 */
export const Geofence = new Geofence$Type();
