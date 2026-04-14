/**
 * Creates a big-endian Uint8Array from a signed integer using two's complement.
 *
 * @module
 */
import { fromIntLE } from './fromIntLE.ts';

/**
 * Creates a big-endian Uint8Array from a signed integer using two's complement.
 *
 * The output length is either the specified length or the minimum number of bytes
 * required to represent the value including the sign bit.
 *
 * @example
 * ```ts
 * import { fromIntBE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromIntBE(127), new Uint8Array([127])));
 * assert(equals(fromIntBE(128), new Uint8Array([0, 128]))); // (needs sign bit)
 * assert(equals(fromIntBE(-1), new Uint8Array([255])));
 * assert(equals(fromIntBE(-128), new Uint8Array([128])));
 * assert(equals(fromIntBE(-129), new Uint8Array([255, 127])));
 * ```
 *
 * @param value The signed integer value to convert (number or bigint).
 * @param length Optional fixed byte length for the output.
 * @returns A big-endian Uint8Array representing the value in two's complement.
 * @throws If value is not a safe integer (for numbers) or exceeds the specified length.
 */
export function fromIntBE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
  return fromIntLE(value, length).reverse();
}
