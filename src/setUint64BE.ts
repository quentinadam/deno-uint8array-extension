import setUint64 from './setUint64.ts';

export default function setUint64BE<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
): Uint8Array<T> {
  return setUint64(target, offset, value, false);
}
