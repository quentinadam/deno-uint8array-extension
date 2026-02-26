import getDataView from './getDataView.ts';

export default function getBigInt64BE(target: Uint8Array, offset: number): bigint {
  return getDataView(target).getBigInt64(offset, false);
}
