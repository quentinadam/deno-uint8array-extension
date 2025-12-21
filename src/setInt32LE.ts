import setInt32 from './setInt32.ts';

export default function setInt32LE(
  target: Uint8Array<ArrayBuffer>,
  offset: number,
  value: number | bigint,
): Uint8Array<ArrayBuffer> {
  return setInt32(target, offset, value, true);
}
