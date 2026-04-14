/**
 * Concatenates multiple Uint8Arrays into a single Uint8Array.
 *
 * @module
 */

/**
 * Concatenates multiple Uint8Arrays into a single Uint8Array.
 *
 * @example
 * ```ts
 * import { concat, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const result = concat([new Uint8Array([1, 2]), new Uint8Array([3, 4])]);
 * assert(equals(result, new Uint8Array([1, 2, 3, 4])));
 * ```
 *
 * @param buffers An array of Uint8Arrays to concatenate.
 * @returns A new Uint8Array containing all bytes from the input arrays in order.
 */
export default function concat(buffers: Uint8Array[]): Uint8Array<ArrayBuffer> {
  const length = buffers.reduce((sum, bytes) => sum + bytes.length, 0);
  const result = new Uint8Array(length);
  buffers.reduce((offset, bytes) => {
    result.set(bytes, offset);
    return offset + bytes.length;
  }, 0);
  return result;
}
