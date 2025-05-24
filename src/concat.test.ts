import assert from '@quentinadam/assert';
import equals from './equals.ts';
import concat from './concat.ts';

Deno.test('concat', () => {
  const result = concat([new Uint8Array([1, 2]), new Uint8Array([3, 4])]);
  assert(equals(result, new Uint8Array([1, 2, 3, 4])));
});
