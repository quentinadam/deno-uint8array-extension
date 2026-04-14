/**
 * Creates an 8-byte little-endian Uint8Array from an unsigned 64-bit integer.
 *
 * @module
 */
import fromUint64 from './fromUint64.ts';

/**
 * Creates an 8-byte little-endian Uint8Array from an unsigned 64-bit integer.
 *
 * @example
 * ```ts
 * import { fromUint64LE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromUint64LE(1000n), new Uint8Array([232, 3, 0, 0, 0, 0, 0, 0])));
 * ```
 *
 * @param value The unsigned 64-bit integer value (0 to 2^64-1).
 * @returns An 8-byte little-endian Uint8Array representing the value.
 * @throws If value is out of range for a 64-bit unsigned integer.
 */
export default function fromUint64LE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromUint64(value, true);
}
