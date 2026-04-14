/**
 * Writes an unsigned 32-bit little-endian integer to a Uint8Array at the specified offset.
 *
 * @module
 */
import { setUint32 } from './setUint32.ts';

/**
 * Writes an unsigned 32-bit little-endian integer to a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { setUint32LE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array(8);
 * setUint32LE(bytes, 0, 1000);
 * assert(equals(bytes, new Uint8Array([232, 3, 0, 0, 0, 0, 0, 0])));
 * ```
 *
 * @param target The Uint8Array to write to.
 * @param offset The byte offset to start writing.
 * @param value The unsigned 32-bit integer value (0 to 4294967295).
 * @returns The modified Uint8Array (same reference as target).
 * @throws If value is out of range for a 32-bit unsigned integer.
 */
export function setUint32LE<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
): Uint8Array<T> {
  return setUint32(target, offset, value, true);
}
