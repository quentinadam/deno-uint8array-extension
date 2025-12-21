import setUint32 from './setUint32.ts';

export default function fromUint32(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setUint32(new Uint8Array(4), 0, value, littleEndian);
}
