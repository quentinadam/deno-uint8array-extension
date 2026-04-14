/**
 * Creates a 4-byte big-endian Uint8Array from a signed 32-bit integer.
 *
 * @module fromInt32BE
 */
import fromInt32 from './fromInt32.ts';

/**
 * Creates a 4-byte big-endian Uint8Array from a signed 32-bit integer.
 *
 * @example
 * ```ts
 * import { fromInt32BE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromInt32BE(1000), new Uint8Array([0, 0, 3, 232])));
 * assert(equals(fromInt32BE(-1), new Uint8Array([255, 255, 255, 255])));
 * ```
 *
 * @param value The signed 32-bit integer value (-2147483648 to 2147483647).
 * @returns A 4-byte big-endian Uint8Array representing the value.
 * @throws If value is out of range for a 32-bit signed integer.
 */
export default function fromInt32BE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromInt32(value, false);
}
