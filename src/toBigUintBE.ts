import toBigUint from './toBigUint.ts';

/**
 * Converts a big-endian Uint8Array to an unsigned bigint.
 *
 * This function treats the entire array as a single large unsigned integer
 * in big-endian format and converts it to a bigint.
 *
 * @example
 * ```ts
 * import { toBigUintBE } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([0, 0, 3, 232]);
 * assert(toBigUintBE(bytes) === 1000n);
 * ```
 *
 * @param target The Uint8Array to convert.
 * @returns The unsigned bigint value.
 */
export default function toBigUintBE(target: Uint8Array): bigint {
  return toBigUint(target, false);
}
