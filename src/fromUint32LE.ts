import fromUint32 from './fromUint32.ts';

export default function fromUint32LE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromUint32(value, true);
}
