import assert from '@quentinadam/assert';
import equals from './equals.ts';

Deno.test('equals', () => {
  const vectors = [
    { a: new Uint8Array([1, 2, 3]), b: new Uint8Array([1, 2, 3]), result: true },
    { a: new Uint8Array([1, 2, 3]), b: new Uint8Array([1, 2, 4]), result: false },
    { a: new Uint8Array([1, 2, 3]), b: new Uint8Array([1, 2]), result: false },
    { a: new Uint8Array([1, 2, 3]), b: new Uint8Array([1, 2, 3, 4]), result: false },
  ];
  for (const { a, b, result } of vectors) {
    assert(equals(a, b) === result);
    assert(equals(b, a) === result);
  }
});
