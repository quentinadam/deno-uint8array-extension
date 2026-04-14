/**
 * Converts a little-endian Uint8Array to an unsigned bigint.
 *
 * @module toBigUintLE
 */
import toBigUint from './toBigUint.ts';

/**
 * Converts a little-endian Uint8Array to an unsigned bigint.
 *
 * This function treats the entire array as a single large unsigned integer
 * in little-endian format and converts it to a bigint.
 *
 * @example
 * ```ts
 * import { toBigUintLE } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([232, 3, 0, 0]);
 * assert(toBigUintLE(bytes) === 1000n);
 * ```
 *
 * @param target The Uint8Array to convert.
 * @returns The unsigned bigint value.
 */
export default function toBigUintLE(target: Uint8Array): bigint {
  return toBigUint(target, true);
}
