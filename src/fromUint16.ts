/**
 * Creates a 2-byte Uint8Array from an unsigned 16-bit integer.
 *
 * @module
 */
import setUint16 from './setUint16.ts';

/**
 * Creates a 2-byte Uint8Array from an unsigned 16-bit integer.
 *
 * @example
 * ```ts
 * import { fromUint16, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromUint16(1000, false), new Uint8Array([3, 232]))); // (big-endian)
 * assert(equals(fromUint16(1000, true), new Uint8Array([232, 3]))); // (little-endian)
 * ```
 *
 * @param value The unsigned 16-bit integer value (0 to 65535).
 * @param littleEndian If true, uses little-endian byte order; otherwise big-endian.
 * @returns A 2-byte Uint8Array representing the value.
 * @throws If value is out of range for a 16-bit unsigned integer.
 */
export default function fromUint16(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setUint16(new Uint8Array(2), 0, value, littleEndian);
}
