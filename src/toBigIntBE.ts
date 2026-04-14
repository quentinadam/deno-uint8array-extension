/**
 * Converts a big-endian Uint8Array to a signed bigint using two's complement.
 *
 * @module toBigIntBE
 */
import toBigInt from './toBigInt.ts';

/**
 * Converts a big-endian Uint8Array to a signed bigint using two's complement.
 *
 * This function treats the entire array as a single large signed integer
 * in big-endian two's complement format and converts it to a bigint.
 *
 * @example
 * ```ts
 * import { toBigIntBE } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(toBigIntBE(new Uint8Array([255, 255, 255, 255])) === -1n);
 * assert(toBigIntBE(new Uint8Array([0, 0, 3, 232])) === 1000n);
 * ```
 *
 * @param target The Uint8Array to convert.
 * @returns The signed bigint value.
 */
export default function toBigIntBE(target: Uint8Array): bigint {
  return toBigInt(target, false);
}
