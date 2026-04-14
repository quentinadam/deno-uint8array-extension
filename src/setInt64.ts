/**
 * Writes a signed 64-bit integer to a Uint8Array at the specified offset.
 *
 * @module setInt64
 */
import assert from '@quentinadam/assert';
import getDataView from './getDataView.ts';

/**
 * Writes a signed 64-bit integer to a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { setInt64, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array(16);
 * setInt64(bytes, 0, 1000n, false); // (big-endian)
 * assert(equals(bytes.slice(0, 8), new Uint8Array([0, 0, 0, 0, 0, 0, 3, 232])));
 * setInt64(bytes, 8, 1000n, true); // (little-endian)
 * assert(equals(bytes.slice(8, 16), new Uint8Array([232, 3, 0, 0, 0, 0, 0, 0])));
 * ```
 *
 * @param target The Uint8Array to write to.
 * @param offset The byte offset to start writing.
 * @param value The signed 64-bit integer value (-2^63 to 2^63-1).
 * @param littleEndian If true, writes as little-endian; otherwise big-endian.
 * @returns The modified Uint8Array (same reference as target).
 * @throws If value is out of range for a 64-bit signed integer.
 */
export default function setInt64<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
  littleEndian: boolean,
): Uint8Array<T> {
  if (typeof value === 'number') {
    assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
    value = BigInt(value);
  }
  assert(
    value >= -0x8000000000000000n && value < 0x8000000000000000n,
    `Value ${value} is out of bounds for a 64-bit signed integer`,
  );
  getDataView(target).setBigInt64(offset, value, littleEndian);
  return target;
}
