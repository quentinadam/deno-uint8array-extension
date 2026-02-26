import assert from '@quentinadam/assert';
import concat from './concat.ts';
import isArrayBufferBacked from './isArrayBufferBacked.ts';

export default function padEnd(target: Uint8Array, length: number): Uint8Array<ArrayBuffer> {
  assert(Number.isSafeInteger(length), `Length ${length} is not a safe integer`);
  if (target.length >= length) {
    if (isArrayBufferBacked(target)) {
      return target;
    }
    return new Uint8Array(target);
  }
  return concat([target, new Uint8Array(length - target.length)]);
}
