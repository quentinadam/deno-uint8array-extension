import assert from '@quentinadam/assert';
import Uint8ArrayExtension from './Uint8ArrayExtension.ts';

Deno.test('equals', () => {
  const vectors = [
    { a: new Uint8Array([1, 2, 3]), b: new Uint8Array([1, 2, 3]), result: true },
    { a: new Uint8Array([1, 2, 3]), b: new Uint8Array([1, 2, 4]), result: false },
    { a: new Uint8Array([1, 2, 3]), b: new Uint8Array([1, 2]), result: false },
    { a: new Uint8Array([1, 2, 3]), b: new Uint8Array([1, 2, 3, 4]), result: false },
  ];
  for (const { a, b, result } of vectors) {
    assert(new Uint8ArrayExtension(a).equals(b) === result);
    assert(new Uint8ArrayExtension(b).equals(a) === result);
  }
});

Deno.test('fromUintBE', () => {
  const vectors = [
    { value: 0, result: new Uint8Array([]) },
    { value: 0, length: 0, result: new Uint8Array([]) },
    { value: 0, length: 1, result: new Uint8Array([0]) },
    { value: 1, result: new Uint8Array([1]) },
    { value: 1, length: 1, result: new Uint8Array([1]) },
    { value: 0x102, result: new Uint8Array([1, 2]) },
    { value: 0x102, length: 2, result: new Uint8Array([1, 2]) },
    { value: 0x102, length: 3, result: new Uint8Array([0, 1, 2]) },
  ];
  for (const { value, length, result } of vectors) {
    assert(new Uint8ArrayExtension(Uint8ArrayExtension.fromUintBE(value, length)).equals(result));
  }
});

Deno.test('fromUintLE', () => {
  const vectors = [
    { value: 0, result: new Uint8Array([]) },
    { value: 0, length: 0, result: new Uint8Array([]) },
    { value: 0, length: 1, result: new Uint8Array([0]) },
    { value: 1, result: new Uint8Array([1]) },
    { value: 1, length: 1, result: new Uint8Array([1]) },
    { value: 0x102, result: new Uint8Array([2, 1]) },
    { value: 0x102, length: 2, result: new Uint8Array([2, 1]) },
    { value: 0x102, length: 3, result: new Uint8Array([2, 1, 0]) },
  ];
  for (const { value, length, result } of vectors) {
    assert(new Uint8ArrayExtension(Uint8ArrayExtension.fromUintLE(value, length)).equals(result));
  }
});

Deno.test('fromIntBE', () => {
  const vectors = [
    { value: 0, length: 0, result: new Uint8Array([]) },
    { value: 0, length: 1, result: new Uint8Array([0]) },
    { value: 1, length: 1, result: new Uint8Array([1]) },
    { value: -1, length: 1, result: new Uint8Array([255]) },
    { value: 0x102, length: 2, result: new Uint8Array([1, 2]) },
    { value: 0x102, length: 3, result: new Uint8Array([0, 1, 2]) },
    { value: -0x103, length: 2, result: new Uint8Array([254, 253]) },
    { value: -0x103, length: 3, result: new Uint8Array([255, 254, 253]) },
  ];
  for (const { value, length, result } of vectors) {
    assert(new Uint8ArrayExtension(Uint8ArrayExtension.fromIntBE(value, length)).equals(result));
  }
});

Deno.test('fromIntLE', () => {
  const vectors = [
    { value: 0, length: 0, result: new Uint8Array([]) },
    { value: 0, length: 1, result: new Uint8Array([0]) },
    { value: 1, length: 1, result: new Uint8Array([1]) },
    { value: -1, length: 1, result: new Uint8Array([255]) },
    { value: 0x102, length: 2, result: new Uint8Array([2, 1]) },
    { value: 0x102, length: 3, result: new Uint8Array([2, 1, 0]) },
    { value: -0x103, length: 2, result: new Uint8Array([253, 254]) },
    { value: -0x103, length: 3, result: new Uint8Array([253, 254, 255]) },
  ];
  for (const { value, length, result } of vectors) {
    assert(new Uint8ArrayExtension(Uint8ArrayExtension.fromIntLE(value, length)).equals(result));
  }
});
