import setUint64 from './setUint64.ts';

export default function fromUint64(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setUint64(new Uint8Array(8), 0, value, littleEndian);
}
