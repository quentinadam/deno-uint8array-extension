import { setUint32 } from './setUint32.ts';

/**
 * Creates a 4-byte Uint8Array from an unsigned 32-bit integer.
 *
 * @example
 * ```ts
 * import { fromUint32, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromUint32(1000, false), new Uint8Array([0, 0, 3, 232]))); // (big-endian)
 * assert(equals(fromUint32(1000, true), new Uint8Array([232, 3, 0, 0]))); // (little-endian)
 * ```
 *
 * @param value The unsigned 32-bit integer value (0 to 4294967295).
 * @param littleEndian If true, uses little-endian byte order; otherwise big-endian.
 * @returns A 4-byte Uint8Array representing the value.
 * @throws If value is out of range for a 32-bit unsigned integer.
 */
export function fromUint32(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setUint32(new Uint8Array(4), 0, value, littleEndian);
}
