import { setUint64 } from './setUint64.ts';

/**
 * Creates an 8-byte Uint8Array from an unsigned 64-bit integer.
 *
 * @example
 * ```ts
 * import { fromUint64, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromUint64(1000n, false), new Uint8Array([0, 0, 0, 0, 0, 0, 3, 232]))); // (big-endian)
 * assert(equals(fromUint64(1000n, true), new Uint8Array([232, 3, 0, 0, 0, 0, 0, 0]))); // (little-endian)
 * ```
 *
 * @param value The unsigned 64-bit integer value (0 to 2^64-1).
 * @param littleEndian If true, uses little-endian byte order; otherwise big-endian.
 * @returns An 8-byte Uint8Array representing the value.
 * @throws If value is out of range for a 64-bit unsigned integer.
 */
export function fromUint64(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setUint64(new Uint8Array(8), 0, value, littleEndian);
}
