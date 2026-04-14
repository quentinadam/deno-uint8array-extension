/**
 * Converts a Uint8Array to a signed bigint using two's complement.
 *
 * @module
 */
import toBigUint from './toBigUint.ts';

/**
 * Converts a Uint8Array to a signed bigint using two's complement.
 *
 * This function treats the entire array as a single large signed integer
 * in two's complement format and converts it to a bigint.
 *
 * @example
 * ```ts
 * import { toBigInt } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(toBigInt(new Uint8Array([255, 255, 255, 255]), false) === -1n); // (big-endian)
 * assert(toBigInt(new Uint8Array([0, 0, 3, 232]), false) === 1000n); // (big-endian)
 * assert(toBigInt(new Uint8Array([232, 3, 0, 0]), true) === 1000n); // (little-endian)
 * ```
 *
 * @param target The Uint8Array to convert.
 * @param littleEndian If true, interprets as little-endian; otherwise big-endian.
 * @returns The signed bigint value.
 */
export default function toBigInt(target: Uint8Array, littleEndian: boolean): bigint {
  const result = toBigUint(target, littleEndian);
  return target.length > 0 && result >= (1n << (BigInt(target.length) * 8n - 1n))
    ? result - (1n << BigInt(target.length) * 8n)
    : result;
}
