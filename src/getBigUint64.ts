import getDataView from './getDataView.ts';

export default function getBigUint64(target: Uint8Array<ArrayBuffer>, offset: number, littleEndian: boolean): bigint {
  return getDataView(target).getBigUint64(offset, littleEndian);
}
