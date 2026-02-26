import assert from '@quentinadam/assert';
import getDataView from './getDataView.ts';

export default function setInt64<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
  littleEndian: boolean,
): Uint8Array<T> {
  if (typeof value === 'number') {
    assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
    value = BigInt(value);
  }
  assert(
    value >= -0x8000000000000000n && value < 0x8000000000000000n,
    `Value ${value} is out of bounds for a 64-bit signed integer`,
  );
  getDataView(target).setBigInt64(offset, value, littleEndian);
  return target;
}
