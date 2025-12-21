import setInt32 from './setInt32.ts';

export default function fromInt32(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setInt32(new Uint8Array(4), 0, value, littleEndian);
}
