import fromUint16 from './fromUint16.ts';

export default function fromUint16BE(value: number | bigint): Uint8Array<ArrayBuffer> {
  return fromUint16(value, false);
}
