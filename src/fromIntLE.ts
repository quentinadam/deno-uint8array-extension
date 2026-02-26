import assert from '@quentinadam/assert';
import fromUintLE from './fromUintLE.ts';

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

export default function fromIntLE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
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
