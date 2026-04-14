/**
 * Creates an 8-byte Uint8Array from a signed 64-bit integer.
 *
 * @module
 */
import { setInt64 } from './setInt64.ts';

/**
 * Creates an 8-byte Uint8Array from a signed 64-bit integer.
 *
 * @example
 * ```ts
 * import { fromInt64, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromInt64(1000n, false), new Uint8Array([0, 0, 0, 0, 0, 0, 3, 232]))); // (big-endian)
 * assert(equals(fromInt64(1000n, true), new Uint8Array([232, 3, 0, 0, 0, 0, 0, 0]))); // (little-endian)
 * ```
 *
 * @param value The signed 64-bit integer value (-2^63 to 2^63-1).
 * @param littleEndian If true, uses little-endian byte order; otherwise big-endian.
 * @returns An 8-byte Uint8Array representing the value.
 * @throws If value is out of range for a 64-bit signed integer.
 */
export function fromInt64(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setInt64(new Uint8Array(8), 0, value, littleEndian);
}
