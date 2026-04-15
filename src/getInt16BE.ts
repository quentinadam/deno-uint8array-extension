import { getDataView } from './getDataView.ts';

/**
 * Reads a signed 16-bit big-endian integer from a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { getInt16BE } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([3, 232]);
 * assert(getInt16BE(bytes, 0) === 1000);
 * ```
 *
 * @param target The Uint8Array to read from.
 * @param offset The byte offset to start reading.
 * @returns The signed 16-bit integer value (-32768 to 32767).
 */
export function getInt16BE(target: Uint8Array, offset: number): number {
  return getDataView(target).getInt16(offset, false);
}
