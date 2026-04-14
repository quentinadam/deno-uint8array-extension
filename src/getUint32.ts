/**
 * Reads an unsigned 32-bit integer from a Uint8Array at the specified offset.
 *
 * @module
 */
import getDataView from './getDataView.ts';

/**
 * Reads an unsigned 32-bit integer from a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { getUint32 } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([0, 0, 3, 232]);
 * assert(getUint32(bytes, 0, false) === 1000); // (big-endian)
 * assert(getUint32(bytes, 0, true) === 3892510720); // (little-endian)
 * ```
 *
 * @param target The Uint8Array to read from.
 * @param offset The byte offset to start reading.
 * @param littleEndian If true, reads as little-endian; otherwise big-endian.
 * @returns The unsigned 32-bit integer value (0 to 4294967295).
 */
export default function getUint32(target: Uint8Array, offset: number, littleEndian: boolean): number {
  return getDataView(target).getUint32(offset, littleEndian);
}
