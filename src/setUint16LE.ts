import setUint16 from './setUint16.ts';

export default function setUint16LE<T extends ArrayBufferLike>(
  target: Uint8Array<T>,
  offset: number,
  value: number | bigint,
): Uint8Array<T> {
  return setUint16(target, offset, value, true);
}
