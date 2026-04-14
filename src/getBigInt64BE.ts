/**
 * Reads a signed 64-bit big-endian integer as a bigint from a Uint8Array at the specified offset.
 *
 * @module
 */
import getDataView from './getDataView.ts';

/**
 * Reads a signed 64-bit big-endian integer as a bigint from a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { getBigInt64BE } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([0, 0, 0, 0, 0, 0, 3, 232]);
 * assert(getBigInt64BE(bytes, 0) === 1000n);
 * ```
 *
 * @param target The Uint8Array to read from.
 * @param offset The byte offset to start reading.
 * @returns The signed 64-bit integer value as bigint.
 */
export default function getBigInt64BE(target: Uint8Array, offset: number): bigint {
  return getDataView(target).getBigInt64(offset, false);
}
