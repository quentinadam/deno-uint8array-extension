import assert from '@quentinadam/assert';
import getDataView from './getDataView.ts';

export default function setUint64(
  target: Uint8Array<ArrayBuffer>,
  offset: number,
  value: number | bigint,
  littleEndian: boolean,
): Uint8Array<ArrayBuffer> {
  if (typeof value === 'number') {
    assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
    value = BigInt(value);
  }
  assert(
    value >= 0n && value < 0x10000000000000000n,
    `Value ${value} is out of bounds for a 64-bit unsigned integer`,
  );
  getDataView(target).setBigUint64(offset, value, littleEndian);
  return target;
}
