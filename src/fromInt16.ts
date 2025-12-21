import setInt16 from './setInt16.ts';

export default function fromInt16(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setInt16(new Uint8Array(2), 0, value, littleEndian);
}
