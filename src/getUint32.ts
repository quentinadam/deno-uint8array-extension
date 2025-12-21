import getDataView from './getDataView.ts';

export default function getUint32(target: Uint8Array<ArrayBuffer>, offset: number, littleEndian: boolean): number {
  return getDataView(target).getUint32(offset, littleEndian);
}
