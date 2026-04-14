/**
 * Creates an 8-byte big-endian Uint8Array from a signed 64-bit integer.
 *
 * @module
 */
import fromInt64 from './fromInt64.ts';

/**
 * Creates an 8-byte big-endian Uint8Array from a signed 64-bit integer.
 *
 * @example
 * ```ts
 * import { fromInt64BE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromInt64BE(1000n), new Uint8Array([0, 0, 0, 0, 0, 0, 3, 232])));
 * assert(equals(fromInt64BE(-1n), new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255])));
 * ```
 *
 * @param value The signed 64-bit integer value (-2^63 to 2^63-1).
 * @returns An 8-byte big-endian Uint8Array representing the value.
 * @throws If value is out of range for a 64-bit signed integer.
 */
export default function fromInt64BE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromInt64(value, false);
}
