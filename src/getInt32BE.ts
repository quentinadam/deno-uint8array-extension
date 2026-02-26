import getDataView from './getDataView.ts';

export default function getInt32BE(target: Uint8Array, offset: number): number {
  return getDataView(target).getInt32(offset, false);
}
