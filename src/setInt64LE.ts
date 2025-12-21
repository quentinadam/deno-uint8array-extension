import setInt64 from './setInt64.ts';

export default function setInt64LE(
  target: Uint8Array<ArrayBuffer>,
  offset: number,
  value: number | bigint,
): Uint8Array<ArrayBuffer> {
  return setInt64(target, offset, value, true);
}
