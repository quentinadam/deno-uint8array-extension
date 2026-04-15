import { setInt16 } from './setInt16.ts';

/**
 * Writes a signed 16-bit big-endian integer to a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { setInt16BE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array(4);
 * setInt16BE(bytes, 0, 1000);
 * assert(equals(bytes, new Uint8Array([3, 232, 0, 0])));
 * ```
 *
 * @param target The Uint8Array to write to.
 * @param offset The byte offset to start writing.
 * @param value The signed 16-bit integer value (-32768 to 32767).
 * @returns The modified Uint8Array (same reference as target).
 * @throws If value is out of range for a 16-bit signed integer.
 */
export function setInt16BE<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
): Uint8Array<T> {
  return setInt16(target, offset, value, false);
}
