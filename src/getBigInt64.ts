import getDataView from './getDataView.ts';

/**
 * Reads a signed 64-bit integer as a bigint from a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { getBigInt64 } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([0, 0, 0, 0, 0, 0, 3, 232]);
 * assert(getBigInt64(bytes, 0, false) === 1000n); // (big-endian)
 * assert(getBigInt64(bytes, 0, true) === -1728537831980138496n); // (little-endian)
 * ```
 *
 * @param target The Uint8Array to read from.
 * @param offset The byte offset to start reading.
 * @param littleEndian If true, reads as little-endian; otherwise big-endian.
 * @returns The signed 64-bit integer value as bigint.
 */
export default function getBigInt64(target: Uint8Array, offset: number, littleEndian: boolean): bigint {
  return getDataView(target).getBigInt64(offset, littleEndian);
}
