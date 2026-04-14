/**
 * Writes an unsigned 64-bit little-endian integer to a Uint8Array at the specified offset.
 *
 * @module
 */
import setUint64 from './setUint64.ts';

/**
 * Writes an unsigned 64-bit little-endian integer to a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { setUint64LE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array(16);
 * setUint64LE(bytes, 0, 1000n);
 * assert(equals(bytes.slice(0, 8), new Uint8Array([232, 3, 0, 0, 0, 0, 0, 0])));
 * ```
 *
 * @param target The Uint8Array to write to.
 * @param offset The byte offset to start writing.
 * @param value The unsigned 64-bit integer value (0 to 2^64-1).
 * @returns The modified Uint8Array (same reference as target).
 * @throws If value is out of range for a 64-bit unsigned integer.
 */
export default function setUint64LE<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
): Uint8Array<T> {
  return setUint64(target, offset, value, true);
}
