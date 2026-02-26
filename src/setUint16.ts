import assert from '@quentinadam/assert';
import getDataView from './getDataView.ts';

export default function setUint16<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
  littleEndian: boolean,
): Uint8Array<T> {
  if (typeof value === 'bigint') {
    value = Number(value);
  }
  assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
  assert(value >= 0 && value < 0x10000, `Value ${value} is out of bounds for a 16-bit unsigned integer`);
  getDataView(target).setUint16(offset, value, littleEndian);
  return target;
}
