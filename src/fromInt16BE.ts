import fromInt16 from './fromInt16.ts';

/**
 * Creates a 2-byte big-endian Uint8Array from a signed 16-bit integer.
 *
 * @example
 * ```ts
 * import { fromInt16BE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromInt16BE(1000), new Uint8Array([3, 232])));
 * assert(equals(fromInt16BE(-1), new Uint8Array([255, 255])));
 * ```
 *
 * @param value The signed 16-bit integer value (-32768 to 32767).
 * @returns A 2-byte big-endian Uint8Array representing the value.
 * @throws If value is out of range for a 16-bit signed integer.
 */
export default function fromInt16BE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromInt16(value, false);
}
