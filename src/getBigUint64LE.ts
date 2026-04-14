/**
 * Reads an unsigned 64-bit little-endian integer as a bigint from a Uint8Array at the specified offset.
 *
 * @module
 */
import { getDataView } from './getDataView.ts';

/**
 * Reads an unsigned 64-bit little-endian integer as a bigint from a Uint8Array at the specified offset.
 *
 * @example
 * ```ts
 * import { getBigUint64LE } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([232, 3, 0, 0, 0, 0, 0, 0]);
 * assert(getBigUint64LE(bytes, 0) === 1000n);
 * ```
 *
 * @param target The Uint8Array to read from.
 * @param offset The byte offset to start reading.
 * @returns The unsigned 64-bit integer value as bigint (0 to 2^64-1).
 */
export function getBigUint64LE(target: Uint8Array, offset: number): bigint {
  return getDataView(target).getBigUint64(offset, true);
}
