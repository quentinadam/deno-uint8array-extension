import { getDataView } from './getDataView.ts';

/**
 * Reads a signed 32-bit integer from a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { getInt32 } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([0, 0, 3, 232]);
 * assert(getInt32(bytes, 0, false) === 1000); // (big-endian)
 * assert(getInt32(bytes, 0, true) === -402456576); // (little-endian)
 * ```
 *
 * @param target The Uint8Array to read from.
 * @param offset The byte offset to start reading.
 * @param littleEndian If true, reads as little-endian; otherwise big-endian.
 * @returns The signed 32-bit integer value (-2147483648 to 2147483647).
 */
export function getInt32(target: Uint8Array, offset: number, littleEndian: boolean): number {
  return getDataView(target).getInt32(offset, littleEndian);
}
