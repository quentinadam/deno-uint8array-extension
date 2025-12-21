import fromInt16 from './fromInt16.ts';

export default function fromInt16LE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromInt16(value, true);
}
