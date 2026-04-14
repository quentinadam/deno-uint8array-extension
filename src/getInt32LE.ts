import getDataView from './getDataView.ts';

/**
 * Reads a signed 32-bit little-endian integer from a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { getInt32LE } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([232, 3, 0, 0]);
 * assert(getInt32LE(bytes, 0) === 1000);
 * ```
 *
 * @param target The Uint8Array to read from.
 * @param offset The byte offset to start reading.
 * @returns The signed 32-bit integer value (-2147483648 to 2147483647).
 */
export default function getInt32LE(target: Uint8Array, offset: number): number {
  return getDataView(target).getInt32(offset, true);
}
