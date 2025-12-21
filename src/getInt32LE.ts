import getDataView from './getDataView.ts';

export default function getInt32LE(target: Uint8Array<ArrayBuffer>, offset: number): number {
  return getDataView(target).getInt32(offset, true);
}
