import assert from '@quentinadam/assert';
import getDataView from './getDataView.ts';

export default function setInt16(
  target: Uint8Array<ArrayBuffer>,
  offset: number,
  value: number | bigint,
  littleEndian: boolean,
): Uint8Array<ArrayBuffer> {
  if (typeof value === 'bigint') {
    value = Number(value);
  }
  assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
  assert(value >= -0x8000 && value < 0x8000, `Value ${value} is out of bounds for a 16-bit signed integer`);
  getDataView(target).setInt16(offset, value, littleEndian);
  return target;
}
