import fromInt32 from './fromInt32.ts';

export default function fromInt32BE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromInt32(value, false);
}
