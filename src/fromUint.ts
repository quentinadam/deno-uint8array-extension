/**
 * Creates a Uint8Array from an unsigned integer with configurable endianness.
 *
 * @module
 */
import { fromUintBE } from './fromUintBE.ts';
import { fromUintLE } from './fromUintLE.ts';

/**
 * Creates a Uint8Array from an unsigned integer with configurable endianness.
 *
 * The output length is either the specified length or the minimum number of bytes
 * required to represent the value.
 *
 * @example
 * ```ts
 * import { fromUint, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromUint(1000, false), new Uint8Array([3, 232]))); // (big-endian)
 * assert(equals(fromUint(1000, true), new Uint8Array([232, 3]))); // (little-endian)
 * assert(equals(fromUint(1000, false, 4), new Uint8Array([0, 0, 3, 232])));
 * ```
 *
 * @param value The unsigned integer value to convert (number or bigint).
 * @param littleEndian If true, uses little-endian byte order; otherwise big-endian.
 * @param length Optional fixed byte length for the output.
 * @returns A Uint8Array representing the value in the specified byte order.
 * @throws If value is negative, not a safe integer (for numbers), or exceeds the specified length.
 */
export function fromUint(
  value: number | bigint,
  littleEndian: boolean,
  length?: number,
): Uint8Array<ArrayBuffer> {
  return littleEndian ? fromUintLE(value, length) : fromUintBE(value, length);
}
