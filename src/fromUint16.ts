import setUint16 from './setUint16.ts';

export default function fromUint16(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setUint16(new Uint8Array(2), 0, value, littleEndian);
}
