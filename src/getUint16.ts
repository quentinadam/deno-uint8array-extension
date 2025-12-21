import getDataView from './getDataView.ts';

export default function getUint16(target: Uint8Array<ArrayBuffer>, offset: number, littleEndian: boolean): number {
  return getDataView(target).getUint16(offset, littleEndian);
}
