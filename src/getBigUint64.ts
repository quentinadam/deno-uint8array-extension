/**
 * Reads an unsigned 64-bit integer as a bigint from a Uint8Array at the specified offset.
 *
 * @module getBigUint64
 */
import getDataView from './getDataView.ts';

/**
 * Reads an unsigned 64-bit integer as a bigint from a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { getBigUint64 } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([0, 0, 0, 0, 0, 0, 3, 232]);
 * assert(getBigUint64(bytes, 0, false) === 1000n); // (big-endian)
 * assert(getBigUint64(bytes, 0, true) === 16718206241729413120n); // (little-endian)
 * ```
 *
 * @param target The Uint8Array to read from.
 * @param offset The byte offset to start reading.
 * @param littleEndian If true, reads as little-endian; otherwise big-endian.
 * @returns The unsigned 64-bit integer value as bigint (0 to 2^64-1).
 */
export default function getBigUint64(target: Uint8Array, offset: number, littleEndian: boolean): bigint {
  return getDataView(target).getBigUint64(offset, littleEndian);
}
