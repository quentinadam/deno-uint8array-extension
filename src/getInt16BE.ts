import getDataView from './getDataView.ts';

export default function getInt16BE(target: Uint8Array, offset: number): number {
  return getDataView(target).getInt16(offset, false);
}
