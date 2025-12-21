import fromInt64 from './fromInt64.ts';

export default function fromInt64LE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromInt64(value, true);
}
