import getDataView from './getDataView.ts';

export default function getInt32(target: Uint8Array<ArrayBuffer>, offset: number, littleEndian: boolean): number {
  return getDataView(target).getInt32(offset, littleEndian);
}
