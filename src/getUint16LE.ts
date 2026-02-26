import getDataView from './getDataView.ts';

export default function getUint16LE(target: Uint8Array, offset: number): number {
  return getDataView(target).getUint16(offset, true);
}
