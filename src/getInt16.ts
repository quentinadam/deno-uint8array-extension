import { getDataView } from './getDataView.ts';

/**
 * Reads a signed 16-bit integer from a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { getInt16 } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([3, 232]);
 * assert(getInt16(bytes, 0, false) === 1000); // (big-endian)
 * assert(getInt16(bytes, 0, true) === -6141); // (little-endian)
 * ```
 *
 * @param target The Uint8Array to read from.
 * @param offset The byte offset to start reading.
 * @param littleEndian If true, reads as little-endian; otherwise big-endian.
 * @returns The signed 16-bit integer value (-32768 to 32767).
 */
export function getInt16(target: Uint8Array, offset: number, littleEndian: boolean): number {
  return getDataView(target).getInt16(offset, littleEndian);
}
