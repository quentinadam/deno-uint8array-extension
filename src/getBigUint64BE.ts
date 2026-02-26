import getDataView from './getDataView.ts';

export default function getBigUint64BE(target: Uint8Array, offset: number): bigint {
  return getDataView(target).getBigUint64(offset, false);
}
