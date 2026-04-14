/**
 * Reads an unsigned 32-bit big-endian integer from a Uint8Array at the specified offset.
 *
 * @module
 */
import { getDataView } from './getDataView.ts';

/**
 * Reads an unsigned 32-bit big-endian integer from a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { getUint32BE } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([0, 0, 3, 232]);
 * assert(getUint32BE(bytes, 0) === 1000);
 * ```
 *
 * @param target The Uint8Array to read from.
 * @param offset The byte offset to start reading.
 * @returns The unsigned 32-bit integer value (0 to 4294967295).
 */
export function getUint32BE(target: Uint8Array, offset: number): number {
  return getDataView(target).getUint32(offset, false);
}
