import fromUint32 from './fromUint32.ts';

/**
 * Creates a 4-byte little-endian Uint8Array from an unsigned 32-bit integer.
 *
 * @example
 * ```ts
 * import { fromUint32LE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromUint32LE(1000), new Uint8Array([232, 3, 0, 0])));
 * assert(equals(fromUint32LE(4294967295), new Uint8Array([255, 255, 255, 255])));
 * ```
 *
 * @param value The unsigned 32-bit integer value (0 to 4294967295).
 * @returns A 4-byte little-endian Uint8Array representing the value.
 * @throws If value is out of range for a 32-bit unsigned integer.
 */
export default function fromUint32LE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromUint32(value, true);
}
