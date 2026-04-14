/**
 * Type guard that checks if a Uint8Array is backed by an ArrayBuffer (not SharedArrayBuffer).
 *
 * @module
 */

/**
 * Type guard that checks if a Uint8Array is backed by an ArrayBuffer (not SharedArrayBuffer).
 *
 * This is useful when you need to ensure the buffer can be transferred or used with
 * APIs that don't support SharedArrayBuffer.
 *
 * @example
 * ```ts
 * import { isArrayBufferBacked } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([1, 2, 3]);
 * assert(isArrayBufferBacked(bytes) === true);
 * // bytes.buffer is guaranteed to be ArrayBuffer here
 * ```
 *
 * @param target The Uint8Array to check.
 * @returns True if the Uint8Array is backed by an ArrayBuffer, false if backed by SharedArrayBuffer.
 */
export function isArrayBufferBacked(target: Uint8Array<ArrayBufferLike>): target is Uint8Array<ArrayBuffer> {
  return target.buffer instanceof ArrayBuffer;
}
