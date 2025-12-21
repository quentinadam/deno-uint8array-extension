import setInt32 from './setInt32.ts';

export default function setInt32BE(
  target: Uint8Array<ArrayBuffer>,
  offset: number,
  value: number | bigint,
): Uint8Array<ArrayBuffer> {
  return setInt32(target, offset, value, false);
}
