import getDataView from './getDataView.ts';

export default function getInt16LE(target: Uint8Array, offset: number): number {
  return getDataView(target).getInt16(offset, true);
}
