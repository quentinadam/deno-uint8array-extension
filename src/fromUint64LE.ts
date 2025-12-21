import fromUint64 from './fromUint64.ts';

export default function fromUint64LE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromUint64(value, true);
}
