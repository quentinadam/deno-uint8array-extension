/**
 * Writes a signed 32-bit integer to a Uint8Array at the specified offset.
 *
 * @module
 */
import assert from '@quentinadam/assert';
import { getDataView } from './getDataView.ts';

/**
 * Writes a signed 32-bit integer to a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { setInt32, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array(8);
 * setInt32(bytes, 0, 1000, false); // (big-endian)
 * assert(equals(bytes, new Uint8Array([0, 0, 3, 232, 0, 0, 0, 0])));
 * setInt32(bytes, 4, 1000, true); // (little-endian)
 * assert(equals(bytes, new Uint8Array([0, 0, 3, 232, 232, 3, 0, 0])));
 * ```
 *
 * @param target The Uint8Array to write to.
 * @param offset The byte offset to start writing.
 * @param value The signed 32-bit integer value (-2147483648 to 2147483647).
 * @param littleEndian If true, writes as little-endian; otherwise big-endian.
 * @returns The modified Uint8Array (same reference as target).
 * @throws If value is out of range for a 32-bit signed integer.
 */
export function setInt32<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
  littleEndian: boolean,
): Uint8Array<T> {
  if (typeof value === 'bigint') {
    value = Number(value);
  }
  assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
  assert(value >= -0x80000000 && value < 0x80000000, `Value ${value} is out of bounds for a 32-bit signed integer`);
  getDataView(target).setInt32(offset, value, littleEndian);
  return target;
}
