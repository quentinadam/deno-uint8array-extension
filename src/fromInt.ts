/**
 * Creates a Uint8Array from a signed integer with configurable endianness using two's complement.
 *
 * @module
 */
import { fromIntBE } from './fromIntBE.ts';
import { fromIntLE } from './fromIntLE.ts';

/**
 * Creates a Uint8Array from a signed integer with configurable endianness using two's complement.
 *
 * The output length is either the specified length or the minimum number of bytes
 * required to represent the value including the sign bit.
 *
 * @example
 * ```ts
 * import { fromInt, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromInt(-1000, false), new Uint8Array([252, 24]))); // (big-endian)
 * assert(equals(fromInt(-1000, true), new Uint8Array([24, 252]))); // (little-endian)
 * assert(equals(fromInt(-1000, false, 4), new Uint8Array([255, 255, 252, 24]))); // (fixed 4-byte big-endian)
 * ```
 *
 * @param value The signed integer value to convert (number or bigint).
 * @param littleEndian If true, uses little-endian byte order; otherwise big-endian.
 * @param length Optional fixed byte length for the output.
 * @returns A Uint8Array representing the value in two's complement.
 * @throws If value is not a safe integer (for numbers) or exceeds the specified length.
 */
export function fromInt(
  value: number | bigint,
  littleEndian: boolean,
  length?: number,
): Uint8Array<ArrayBuffer> {
  return littleEndian ? fromIntLE(value, length) : fromIntBE(value, length);
}
