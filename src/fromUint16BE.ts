import fromUint16 from './fromUint16.ts';

/**
 * Creates a 2-byte big-endian Uint8Array from an unsigned 16-bit integer.
 *
 * @example
 * ```ts
 * import { fromUint16BE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromUint16BE(1000), new Uint8Array([3, 232])));
 * assert(equals(fromUint16BE(65535), new Uint8Array([255, 255])));
 * ```
 *
 * @param value The unsigned 16-bit integer value (0 to 65535).
 * @returns A 2-byte big-endian Uint8Array representing the value.
 * @throws If value is out of range for a 16-bit unsigned integer.
 */
export default function fromUint16BE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromUint16(value, false);
}
