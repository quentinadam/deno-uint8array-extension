/**
 * Writes a signed 64-bit little-endian integer to a Uint8Array at the specified offset.
 *
 * @module
 */
import { setInt64 } from './setInt64.ts';

/**
 * Writes a signed 64-bit little-endian integer to a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { setInt64LE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array(16);
 * setInt64LE(bytes, 0, 1000n);
 * assert(equals(bytes.slice(0, 8), new Uint8Array([232, 3, 0, 0, 0, 0, 0, 0])));
 * ```
 *
 * @param target The Uint8Array to write to.
 * @param offset The byte offset to start writing.
 * @param value The signed 64-bit integer value (-2^63 to 2^63-1).
 * @returns The modified Uint8Array (same reference as target).
 * @throws If value is out of range for a 64-bit signed integer.
 */
export function setInt64LE<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
): Uint8Array<T> {
  return setInt64(target, offset, value, true);
}
