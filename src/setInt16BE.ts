import setInt16 from './setInt16.ts';

export default function setInt16BE(
  target: Uint8Array<ArrayBuffer>,
  offset: number,
  value: number | bigint,
): Uint8Array<ArrayBuffer> {
  return setInt16(target, offset, value, false);
}
