import setInt16 from './setInt16.ts';

/**
 * Creates a 2-byte Uint8Array from a signed 16-bit integer.
 *
 * @example
 * ```ts
 * import { equals, fromInt16 } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromInt16(1000, false), new Uint8Array([3, 232]))); // (big-endian)
 * assert(equals(fromInt16(-1, false), new Uint8Array([255, 255]))); // (big-endian)
 * assert(equals(fromInt16(1000, true), new Uint8Array([232, 3]))); // (little-endian)
 * ```
 *
 * @param value The signed 16-bit integer value (-32768 to 32767).
 * @param littleEndian If true, uses little-endian byte order; otherwise big-endian.
 * @returns A 2-byte Uint8Array representing the value.
 * @throws If value is out of range for a 16-bit signed integer.
 */
export default function fromInt16(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setInt16(new Uint8Array(2), 0, value, littleEndian);
}
