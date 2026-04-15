/**
 * Converts a Uint8Array to an unsigned bigint.
 *
 * This function treats the entire array as a single large unsigned integer
 * and converts it to a bigint. The array can be of any length.
 *
 * @example
 * ```ts
 * import { toBigUint } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([0, 0, 3, 232]);
 * assert(toBigUint(bytes, false) === 1000n); // (big-endian)
 * assert(toBigUint(bytes, true) === 3892510720n); // (little-endian)
 * ```
 *
 * @param target The Uint8Array to convert.
 * @param littleEndian If true, interprets as little-endian; otherwise big-endian.
 * @returns The unsigned bigint value.
 */
export function toBigUint(target: Uint8Array, littleEndian: boolean): bigint {
  const bytes = littleEndian ? target.toReversed() : target;
  let result = BigInt(0);
  for (const byte of bytes) {
    result = (result << 8n) | BigInt(byte);
  }
  return result;
}
