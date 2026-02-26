import assert from '@quentinadam/assert';
import getDataView from './getDataView.ts';

export default function setUint32<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
  littleEndian: boolean,
): Uint8Array<T> {
  if (typeof value === 'bigint') {
    value = Number(value);
  }
  assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
  assert(value >= 0 && value < 0x100000000, `Value ${value} is out of bounds for a 32-bit unsigned integer`);
  getDataView(target).setUint32(offset, value, littleEndian);
  return target;
}
