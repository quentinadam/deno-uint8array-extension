import setInt64 from './setInt64.ts';

export default function setInt64BE<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
): Uint8Array<T> {
  return setInt64(target, offset, value, false);
}
