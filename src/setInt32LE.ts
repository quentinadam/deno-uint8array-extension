import setInt32 from './setInt32.ts';

export default function setInt32LE<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
): Uint8Array<T> {
  return setInt32(target, offset, value, true);
}
