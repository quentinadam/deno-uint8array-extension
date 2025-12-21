import getDataView from './getDataView.ts';

export default function getBigUint64BE(target: Uint8Array<ArrayBuffer>, offset: number): bigint {
  return getDataView(target).getBigUint64(offset, false);
}
