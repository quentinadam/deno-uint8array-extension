import { assert } from '@quentinadam/assert';
import { getDataView } from './getDataView.ts';

/**
 * Writes an unsigned 32-bit integer to a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { setUint32, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array(8);
 * setUint32(bytes, 0, 1000, false); // (big-endian)
 * assert(equals(bytes, new Uint8Array([0, 0, 3, 232, 0, 0, 0, 0])));
 * setUint32(bytes, 4, 1000, true); // (little-endian)
 * assert(equals(bytes, new Uint8Array([0, 0, 3, 232, 232, 3, 0, 0])));
 * ```
 *
 * @param target The Uint8Array to write to.
 * @param offset The byte offset to start writing.
 * @param value The unsigned 32-bit integer value (0 to 4294967295).
 * @param littleEndian If true, writes as little-endian; otherwise big-endian.
 * @returns The modified Uint8Array (same reference as target).
 * @throws If value is out of range for a 32-bit unsigned integer.
 */
export function setUint32<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
  littleEndian: boolean,
): Uint8Array<T> {
  if (typeof value === 'bigint') {
    value = Number(value);
  }
  assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
  assert(value >= 0 && value < 0x100000000, `Value ${value} is out of bounds for a 32-bit unsigned integer`);
  getDataView(target).setUint32(offset, value, littleEndian);
  return target;
}
