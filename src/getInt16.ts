import getDataView from './getDataView.ts';

export default function getInt16(target: Uint8Array, offset: number, littleEndian: boolean): number {
  return getDataView(target).getInt16(offset, littleEndian);
}
