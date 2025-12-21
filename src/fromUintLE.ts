import assert from '@quentinadam/assert';

export default function fromUintLE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
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
