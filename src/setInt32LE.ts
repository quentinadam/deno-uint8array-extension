import setInt32 from './setInt32.ts';

/**
 * Writes a signed 32-bit little-endian integer to a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { setInt32LE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array(8);
 * setInt32LE(bytes, 0, 1000);
 * assert(equals(bytes, new Uint8Array([232, 3, 0, 0, 0, 0, 0, 0])));
 * ```
 *
 * @param target The Uint8Array to write to.
 * @param offset The byte offset to start writing.
 * @param value The signed 32-bit integer value (-2147483648 to 2147483647).
 * @returns The modified Uint8Array (same reference as target).
 * @throws If value is out of range for a 32-bit signed integer.
 */
export default function setInt32LE<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
): Uint8Array<T> {
  return setInt32(target, offset, value, true);
}
