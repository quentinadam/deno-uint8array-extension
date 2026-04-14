/**
 * Internal helper that creates little-endian bytes from a non-negative bigint,
 *
 * @module
 */
import assert from '@quentinadam/assert';
import { fromUintLE } from './fromUintLE.ts';

/**
 * Internal helper that creates little-endian bytes from a non-negative bigint,
 * ensuring proper sign bit handling for signed integer representation.
 */
function _fromIntLE(value: bigint, minimumLength: number, length?: number): number[] {
  const bytes = Array.from(fromUintLE(value));
  const lastByte = bytes.at(-1);
  if (lastByte !== undefined && lastByte >= 0x80) {
    bytes.push(0);
  }
  while (bytes.length < minimumLength) {
    bytes.push(0);
  }
  if (length !== undefined) {
    assert(bytes.length <= length, `Value ${value} is too large to fit in ${length} bytes as a signed integer`);
    while (bytes.length < length) {
      bytes.push(0);
    }
  }
  return bytes;
}

/**
 * Creates a little-endian Uint8Array from a signed integer using two's complement.
 *
 * The output length is either the specified length or the minimum number of bytes
 * required to represent the value including the sign bit.
 *
 * @example
 * ```ts
 * import { fromIntLE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromIntLE(127), new Uint8Array([127])));
 * assert(equals(fromIntLE(128), new Uint8Array([128, 0]))); // (needs sign bit)
 * assert(equals(fromIntLE(-1), new Uint8Array([255])));
 * assert(equals(fromIntLE(-128), new Uint8Array([128])));
 * assert(equals(fromIntLE(-129), new Uint8Array([127, 255])));
 * ```
 *
 * @param value The signed integer value to convert (number or bigint).
 * @param length Optional fixed byte length for the output.
 * @returns A little-endian Uint8Array representing the value in two's complement.
 * @throws If value is not a safe integer (for numbers) or exceeds the specified length.
 */
export function fromIntLE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
  if (typeof value === 'number') {
    assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
    value = BigInt(value);
  }
  if (value >= 0n) {
    const bytes = _fromIntLE(value, 0, length);
    return new Uint8Array(bytes);
  } else {
    const bytes = _fromIntLE(-value - 1n, 1, length).map((bytes) => 0xff - bytes);
    return new Uint8Array(bytes);
  }
}
