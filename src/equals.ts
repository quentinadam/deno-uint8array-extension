/**
 * Compares two Uint8Arrays for byte-by-byte equality.
 *
 * @module
 */

/**
 * Compares two Uint8Arrays for byte-by-byte equality.
 *
 * @example
 * ```ts
 * import { equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 3])) === true);
 * assert(equals(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 4])) === false);
 * ```
 *
 * @param a The first Uint8Array to compare.
 * @param b The second Uint8Array to compare.
 * @returns True if both arrays have the same length and identical bytes, false otherwise.
 */
export default function equals(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
