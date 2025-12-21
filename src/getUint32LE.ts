import getDataView from './getDataView.ts';

export default function getUint32LE(target: Uint8Array<ArrayBuffer>, offset: number): number {
  return getDataView(target).getUint32(offset, true);
}
