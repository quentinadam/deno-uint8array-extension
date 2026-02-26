import getDataView from './getDataView.ts';

export default function getUint32BE(target: Uint8Array, offset: number): number {
  return getDataView(target).getUint32(offset, false);
}
