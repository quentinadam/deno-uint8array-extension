import assert from '@quentinadam/assert';
import concat from './concat.ts';

export default function padStart(target: Uint8Array<ArrayBuffer>, length: number): Uint8Array<ArrayBuffer> {
  assert(Number.isSafeInteger(length), `Length ${length} is not a safe integer`);
  if (target.length >= length) {
    return target;
  }
  return concat([new Uint8Array(length - target.length), target]);
}
