import assert from '@quentinadam/assert';
import fromUintLE from './fromUintLE.ts';

export default function fromIntLE(value: number | bigint, length: number): Uint8Array<ArrayBuffer> {
  if (typeof value === 'number') {
    assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
    value = BigInt(value);
  }
  assert(Number.isSafeInteger(length), `Length ${length} is not a safe integer`);
  if (value > 0n) {
    const maxValue = (1n << (BigInt(length) * 8n - 1n)) - 1n;
    assert(value <= maxValue, `Value ${value} is out of bounds for a ${length}-byte signed integer`);
  } else {
    const minValue = -(1n << (BigInt(length) * 8n - 1n));
    assert(value >= minValue, `Value ${value} is out of bounds for a ${length}-byte signed integer`);
  }
  if (value < 0n) {
    value = (1n << (BigInt(length) * 8n)) + value;
  }
  return fromUintLE(value, length);
}
