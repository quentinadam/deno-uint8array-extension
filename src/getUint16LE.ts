import getDataView from './getDataView.ts';

/**
 * Reads an unsigned 16-bit little-endian integer from a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { getUint16LE } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([232, 3]);
 * assert(getUint16LE(bytes, 0) === 1000);
 * ```
 *
 * @param target The Uint8Array to read from.
 * @param offset The byte offset to start reading.
 * @returns The unsigned 16-bit integer value (0 to 65535).
 */
export default function getUint16LE(target: Uint8Array, offset: number): number {
  return getDataView(target).getUint16(offset, true);
}
