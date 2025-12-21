import fromUint32 from './fromUint32.ts';

export default function fromUint32BE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromUint32(value, false);
}
