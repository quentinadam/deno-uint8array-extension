import { toBigInt } from './toBigInt.ts';

/**
 * Converts a little-endian Uint8Array to a signed bigint using two's complement.
 *
 * This function treats the entire array as a single large signed integer
 * in little-endian two's complement format and converts it to a bigint.
 *
 * @example
 * ```ts
 * import { toBigIntLE } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(toBigIntLE(new Uint8Array([255, 255, 255, 255])) === -1n);
 * assert(toBigIntLE(new Uint8Array([232, 3, 0, 0])) === 1000n);
 * ```
 *
 * @param target The Uint8Array to convert.
 * @returns The signed bigint value.
 */
export function toBigIntLE(target: Uint8Array): bigint {
  return toBigInt(target, true);
}
