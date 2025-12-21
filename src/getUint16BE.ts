import getDataView from './getDataView.ts';

export default function getUint16BE(target: Uint8Array<ArrayBuffer>, offset: number): number {
  return getDataView(target).getUint16(offset, false);
}
