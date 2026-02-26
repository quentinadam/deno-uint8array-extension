import getDataView from './getDataView.ts';

export default function getBigInt64(target: Uint8Array, offset: number, littleEndian: boolean): bigint {
  return getDataView(target).getBigInt64(offset, littleEndian);
}
