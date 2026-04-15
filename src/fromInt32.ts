import { setInt32 } from './setInt32.ts';

/**
 * Creates a 4-byte Uint8Array from a signed 32-bit integer.
 *
 * @example
 * ```ts
 * import { fromInt32, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromInt32(1000, false), new Uint8Array([0, 0, 3, 232]))); // (big-endian)
 * assert(equals(fromInt32(1000, true), new Uint8Array([232, 3, 0, 0]))); // (little-endian)
 * ```
 *
 * @param value The signed 32-bit integer value (-2147483648 to 2147483647).
 * @param littleEndian If true, uses little-endian byte order; otherwise big-endian.
 * @returns A 4-byte Uint8Array representing the value.
 * @throws If value is out of range for a 32-bit signed integer.
 */
export function fromInt32(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setInt32(new Uint8Array(4), 0, value, littleEndian);
}
