/**
 * Creates a 2-byte little-endian Uint8Array from a signed 16-bit integer.
 *
 * @module
 */
import { fromInt16 } from './fromInt16.ts';

/**
 * Creates a 2-byte little-endian Uint8Array from a signed 16-bit integer.
 *
 * @example
 * ```ts
 * import { fromInt16LE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromInt16LE(1000), new Uint8Array([232, 3])));
 * assert(equals(fromInt16LE(-1), new Uint8Array([255, 255])));
 * ```
 *
 * @param value The signed 16-bit integer value (-32768 to 32767).
 * @returns A 2-byte little-endian Uint8Array representing the value.
 * @throws If value is out of range for a 16-bit signed integer.
 */
export function fromInt16LE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromInt16(value, true);
}
