import setUint32 from './setUint32.ts';

export default function setUint32LE<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
): Uint8Array<T> {
  return setUint32(target, offset, value, true);
}
