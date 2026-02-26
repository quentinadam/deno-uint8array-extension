import setInt16 from './setInt16.ts';

export default function setInt16BE<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
): Uint8Array<T> {
  return setInt16(target, offset, value, false);
}
