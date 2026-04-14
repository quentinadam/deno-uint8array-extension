import fromUintLE from './fromUintLE.ts';

/**
 * Creates a big-endian Uint8Array from an unsigned integer.
 *
 * The output length is either the specified length or the minimum number of bytes
 * required to represent the value.
 *
 * @example
 * ```ts
 * import { fromUintBE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromUintBE(1000), new Uint8Array([3, 232])));
 * assert(equals(fromUintBE(1000, 4), new Uint8Array([0, 0, 3, 232])));
 * assert(equals(fromUintBE(0x123456789ABCn), new Uint8Array([18, 52, 86, 120, 154, 188])));
 * ```
 *
 * @param value The unsigned integer value to convert (number or bigint).
 * @param length Optional fixed byte length for the output.
 * @returns A big-endian Uint8Array representing the value.
 * @throws If value is negative, not a safe integer (for numbers), or exceeds the specified length.
 */
export default function fromUintBE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
  return fromUintLE(value, length).reverse();
}
