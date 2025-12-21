import setUint32 from './setUint32.ts';

export default function setUint32LE(
  target: Uint8Array<ArrayBuffer>,
  offset: number,
  value: number | bigint,
): Uint8Array<ArrayBuffer> {
  return setUint32(target, offset, value, true);
}
