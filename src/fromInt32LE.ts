import fromInt32 from './fromInt32.ts';

export default function fromInt32LE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromInt32(value, true);
}
