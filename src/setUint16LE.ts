import setUint16 from './setUint16.ts';

export default function setUint16LE(
  target: Uint8Array<ArrayBuffer>,
  offset: number,
  value: number | bigint,
): Uint8Array<ArrayBuffer> {
  return setUint16(target, offset, value, true);
}
