/**
 * Creates a DataView for accessing the underlying buffer of a Uint8Array.
 *
 * The DataView is created with the correct byte offset and length to match
 * the Uint8Array's view of the buffer, which is important when the Uint8Array
 * is a slice of a larger buffer.
 *
 * @example
 * ```ts
 * import { getDataView } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([0, 0, 3, 232]);
 * const view = getDataView(bytes);
 * assert(view.getUint32(0, false) === 1000);
 * ```
 *
 * @param bytes The Uint8Array to create a DataView for.
 * @returns A DataView for the buffer region covered by the Uint8Array.
 */
export default function getDataView(bytes: Uint8Array): DataView {
  return new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}
