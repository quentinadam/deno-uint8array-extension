import getDataView from './getDataView.ts';

export default function getBigInt64LE(target: Uint8Array<ArrayBuffer>, offset: number): bigint {
  return getDataView(target).getBigInt64(offset, true);
}
