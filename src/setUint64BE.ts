import setUint64 from './setUint64.ts';

export default function setUint64BE(
  target: Uint8Array<ArrayBuffer>,
  offset: number,
  value: number | bigint,
): Uint8Array<ArrayBuffer> {
  return setUint64(target, offset, value, false);
}
