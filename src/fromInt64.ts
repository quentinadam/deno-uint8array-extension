import setInt64 from './setInt64.ts';

export default function fromInt64(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
  return setInt64(new Uint8Array(8), 0, value, littleEndian);
}
