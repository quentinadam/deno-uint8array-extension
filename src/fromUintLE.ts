import assert from '@quentinadam/assert';

/**
 * Creates a little-endian Uint8Array from an unsigned integer.
 *
 * The output length is either the specified length or the minimum number of bytes
 * required to represent the value.
 *
 * @example
 * ```ts
 * import { fromUintLE, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * assert(equals(fromUintLE(1000), new Uint8Array([232, 3])));
 * assert(equals(fromUintLE(1000, 4), new Uint8Array([232, 3, 0, 0])));
 * assert(equals(fromUintLE(0x123456789ABCn), new Uint8Array([188, 154, 120, 86, 52, 18])));
 * ```
 *
 * @param value The unsigned integer value to convert (number or bigint).
 * @param length Optional fixed byte length for the output.
 * @returns A little-endian Uint8Array representing the value.
 * @throws If value is negative, not a safe integer (for numbers), or exceeds the specified length.
 */
export function fromUintLE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
  if (typeof value === 'number') {
    assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
    value = BigInt(value);
  }
  if (length !== undefined) {
    assert(Number.isSafeInteger(length), `Length ${length} is not a safe integer`);
    const maxValue = (1n << (BigInt(length) * 8n)) - 1n;
    assert(value <= maxValue, `Value ${value} is out of bounds for a ${length}-byte unsigned integer`);
  }
  assert(value >= 0n, `Value ${value} is negative`);
  const bytes = new Array<number>();
  let current = value;
  while (current > 0) {
    bytes.push(Number(current & 0xffn));
    current = current >> 8n;
  }
  if (length !== undefined) {
    assert(bytes.length <= length, `number ${value} has more than ${length} bytes (${bytes.length})`);
    for (let i = bytes.length; i < length; i++) {
      bytes.push(0);
    }
  }
  return new Uint8Array(bytes);
}
