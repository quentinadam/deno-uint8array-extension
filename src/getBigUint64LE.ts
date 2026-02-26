import getDataView from './getDataView.ts';

export default function getBigUint64LE(target: Uint8Array, offset: number): bigint {
  return getDataView(target).getBigUint64(offset, true);
}
