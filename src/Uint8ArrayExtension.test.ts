import { assert } from '@quentinadam/assert';
import { Uint8ArrayExtension } from './Uint8ArrayExtension.ts';
import { equals } from './equals.ts';

Deno.test('concat', () => {
  const ext = new Uint8ArrayExtension(new Uint8Array([1, 2]));
  const result = ext.concat(new Uint8Array([3, 4]), new Uint8Array([5, 6]));
  assert(equals(result, new Uint8Array([1, 2, 3, 4, 5, 6])));
});

Deno.test('padStart', () => {
  const vectors = [
    { input: new Uint8Array([1, 2, 3]), length: 2, result: new Uint8Array([1, 2, 3]) },
    { input: new Uint8Array([1, 2, 3]), length: 3, result: new Uint8Array([1, 2, 3]) },
    { input: new Uint8Array([1, 2, 3]), length: 5, result: new Uint8Array([0, 0, 1, 2, 3]) },
  ];
  for (const { input, length, result } of vectors) {
    assert(new Uint8ArrayExtension(new Uint8ArrayExtension(input).padStart(length)).equals(result));
  }
});

Deno.test('padEnd', () => {
  const vectors = [
    { input: new Uint8Array([1, 2, 3]), length: 2, result: new Uint8Array([1, 2, 3]) },
    { input: new Uint8Array([1, 2, 3]), length: 3, result: new Uint8Array([1, 2, 3]) },
    { input: new Uint8Array([1, 2, 3]), length: 5, result: new Uint8Array([1, 2, 3, 0, 0]) },
  ];
  for (const { input, length, result } of vectors) {
    assert(new Uint8ArrayExtension(new Uint8ArrayExtension(input).padEnd(length)).equals(result));
  }
});

Deno.test('getInt16/setInt16/fromInt16', () => {
  const vectors = [
    { value: 0x1234, bytes: new Uint8Array([0x12, 0x34]) },
    { value: -1, bytes: new Uint8Array([0xff, 0xff]) },
    { value: -0x1234, bytes: new Uint8Array([0xed, 0xcc]) },
    { value: 32767, bytes: new Uint8Array([0x7f, 0xff]) },
    { value: -32768, bytes: new Uint8Array([0x80, 0x00]) },
    { value: 0, bytes: new Uint8Array([0x00, 0x00]) },
  ];
  for (const { value, bytes } of vectors) {
    assert(new Uint8ArrayExtension(bytes).getInt16(0, false) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getInt16(0, true) === value);
    assert(new Uint8ArrayExtension(bytes).getInt16BE(0) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getInt16LE(0) === value);
    assert(equals(new Uint8ArrayExtension(new Uint8Array(2)).setInt16(0, value, false), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(2)).setInt16(0, value, true), bytes.slice().reverse()));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(2)).setInt16BE(0, value), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(2)).setInt16LE(0, value), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromInt16(value, false), bytes));
    assert(equals(Uint8ArrayExtension.fromInt16(value, true), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromInt16BE(value), bytes));
    assert(equals(Uint8ArrayExtension.fromInt16LE(value), bytes.slice().reverse()));
  }
});

Deno.test('getInt32/setInt32/fromInt32', () => {
  const vectors = [
    { value: 0x12345678, bytes: new Uint8Array([0x12, 0x34, 0x56, 0x78]) },
    { value: -1, bytes: new Uint8Array([0xff, 0xff, 0xff, 0xff]) },
    { value: -0x12345678, bytes: new Uint8Array([0xed, 0xcb, 0xa9, 0x88]) },
    { value: 2147483647, bytes: new Uint8Array([0x7f, 0xff, 0xff, 0xff]) },
    { value: -2147483648, bytes: new Uint8Array([0x80, 0x00, 0x00, 0x00]) },
    { value: 0, bytes: new Uint8Array([0x00, 0x00, 0x00, 0x00]) },
  ];
  for (const { value, bytes } of vectors) {
    assert(new Uint8ArrayExtension(bytes).getInt32(0, false) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getInt32(0, true) === value);
    assert(new Uint8ArrayExtension(bytes).getInt32BE(0) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getInt32LE(0) === value);
    assert(equals(new Uint8ArrayExtension(new Uint8Array(4)).setInt32(0, value, false), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(4)).setInt32(0, value, true), bytes.slice().reverse()));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(4)).setInt32BE(0, value), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(4)).setInt32LE(0, value), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromInt32(value, false), bytes));
    assert(equals(Uint8ArrayExtension.fromInt32(value, true), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromInt32BE(value), bytes));
    assert(equals(Uint8ArrayExtension.fromInt32LE(value), bytes.slice().reverse()));
  }
});

Deno.test('getInt64/setInt64/fromInt64', () => {
  const vectors = [
    { value: 0x123456789abcdef0n, bytes: new Uint8Array([0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf0]) },
    { value: -1n, bytes: new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]) },
    { value: -0x123456789abcdef0n, bytes: new Uint8Array([0xed, 0xcb, 0xa9, 0x87, 0x65, 0x43, 0x21, 0x10]) },
    { value: 9223372036854775807n, bytes: new Uint8Array([0x7f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]) },
    { value: -9223372036854775808n, bytes: new Uint8Array([0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]) },
    { value: 0n, bytes: new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]) },
  ];
  for (const { value, bytes } of vectors) {
    assert(new Uint8ArrayExtension(bytes).getBigInt64(0, false) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getBigInt64(0, true) === value);
    assert(new Uint8ArrayExtension(bytes).getBigInt64BE(0) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getBigInt64LE(0) === value);
    assert(equals(new Uint8ArrayExtension(new Uint8Array(8)).setInt64(0, value, false), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(8)).setInt64(0, value, true), bytes.slice().reverse()));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(8)).setInt64BE(0, value), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(8)).setInt64LE(0, value), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromInt64(value, false), bytes));
    assert(equals(Uint8ArrayExtension.fromInt64(value, true), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromInt64BE(value), bytes));
    assert(equals(Uint8ArrayExtension.fromInt64LE(value), bytes.slice().reverse()));
  }
});

Deno.test('getUint16/setUint16/fromUint16', () => {
  const vectors = [
    { value: 0x1234, bytes: new Uint8Array([0x12, 0x34]) },
    { value: 0, bytes: new Uint8Array([0x00, 0x00]) },
    { value: 65535, bytes: new Uint8Array([0xff, 0xff]) },
    { value: 1, bytes: new Uint8Array([0x00, 0x01]) },
    { value: 65534, bytes: new Uint8Array([0xff, 0xfe]) },
  ];
  for (const { value, bytes } of vectors) {
    assert(new Uint8ArrayExtension(bytes).getUint16(0, false) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getUint16(0, true) === value);
    assert(new Uint8ArrayExtension(bytes).getUint16BE(0) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getUint16LE(0) === value);
    assert(equals(new Uint8ArrayExtension(new Uint8Array(2)).setUint16(0, value, false), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(2)).setUint16(0, value, true), bytes.slice().reverse()));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(2)).setUint16BE(0, value), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(2)).setUint16LE(0, value), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromUint16(value, false), bytes));
    assert(equals(Uint8ArrayExtension.fromUint16(value, true), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromUint16BE(value), bytes));
    assert(equals(Uint8ArrayExtension.fromUint16LE(value), bytes.slice().reverse()));
  }
});

Deno.test('getUint32/setUint32/fromUint32', () => {
  const vectors = [
    { value: 0x12345678, bytes: new Uint8Array([0x12, 0x34, 0x56, 0x78]) },
    { value: 0, bytes: new Uint8Array([0x00, 0x00, 0x00, 0x00]) },
    { value: 4294967295, bytes: new Uint8Array([0xff, 0xff, 0xff, 0xff]) },
    { value: 1, bytes: new Uint8Array([0x00, 0x00, 0x00, 0x01]) },
    { value: 4294967294, bytes: new Uint8Array([0xff, 0xff, 0xff, 0xfe]) },
  ];
  for (const { value, bytes } of vectors) {
    assert(new Uint8ArrayExtension(bytes).getUint32(0, false) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getUint32(0, true) === value);
    assert(new Uint8ArrayExtension(bytes).getUint32BE(0) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getUint32LE(0) === value);
    assert(equals(new Uint8ArrayExtension(new Uint8Array(4)).setUint32(0, value, false), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(4)).setUint32(0, value, true), bytes.slice().reverse()));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(4)).setUint32BE(0, value), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(4)).setUint32LE(0, value), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromUint32(value, false), bytes));
    assert(equals(Uint8ArrayExtension.fromUint32(value, true), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromUint32BE(value), bytes));
    assert(equals(Uint8ArrayExtension.fromUint32LE(value), bytes.slice().reverse()));
  }
});

Deno.test('getUint64/setUint64/fromUint64', () => {
  const vectors = [
    { value: 0x123456789abcdef0n, bytes: new Uint8Array([0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf0]) },
    { value: 0n, bytes: new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]) },
    { value: 18446744073709551615n, bytes: new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]) },
    { value: 1n, bytes: new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]) },
    { value: 18446744073709551614n, bytes: new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe]) },
  ];
  for (const { value, bytes } of vectors) {
    assert(new Uint8ArrayExtension(bytes).getBigUint64(0, false) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getBigUint64(0, true) === value);
    assert(new Uint8ArrayExtension(bytes).getBigUint64BE(0) === value);
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).getBigUint64LE(0) === value);
    assert(equals(new Uint8ArrayExtension(new Uint8Array(8)).setUint64(0, value, false), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(8)).setUint64(0, value, true), bytes.slice().reverse()));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(8)).setUint64BE(0, value), bytes));
    assert(equals(new Uint8ArrayExtension(new Uint8Array(8)).setUint64LE(0, value), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromUint64(value, false), bytes));
    assert(equals(Uint8ArrayExtension.fromUint64(value, true), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromUint64BE(value), bytes));
    assert(equals(Uint8ArrayExtension.fromUint64LE(value), bytes.slice().reverse()));
  }
});

Deno.test('fromInt/toBigInt', () => {
  const vectors = [
    { value: 0, bytes: new Uint8Array([]) },
    { value: 1, bytes: new Uint8Array([1]) },
    { value: 127, bytes: new Uint8Array([127]) },
    { value: 128, bytes: new Uint8Array([0, 128]) },
    { value: -1, bytes: new Uint8Array([255]) },
    { value: -127, bytes: new Uint8Array([129]) },
    { value: -128, bytes: new Uint8Array([128]) },
    { value: -129, bytes: new Uint8Array([255, 127]) },
    { value: 0, length: 0, bytes: new Uint8Array([]) },
    { value: 0, length: 1, bytes: new Uint8Array([0]) },
    { value: 1, length: 1, bytes: new Uint8Array([1]) },
    { value: -1, length: 1, bytes: new Uint8Array([255]) },
    { value: 0x102, length: 2, bytes: new Uint8Array([1, 2]) },
    { value: 0x102, length: 3, bytes: new Uint8Array([0, 1, 2]) },
    { value: -0x103, length: 2, bytes: new Uint8Array([254, 253]) },
    { value: -0x103, length: 3, bytes: new Uint8Array([255, 254, 253]) },
    { value: 0x12345678n, length: 4, bytes: new Uint8Array([0x12, 0x34, 0x56, 0x78]) },
    { value: 0x78563412n, length: 4, bytes: new Uint8Array([0x78, 0x56, 0x34, 0x12]) },
    { value: -1n, length: 4, bytes: new Uint8Array([0xff, 0xff, 0xff, 0xff]) },
    { value: -0x80000000n, length: 4, bytes: new Uint8Array([0x80, 0x00, 0x00, 0x00]) },
    { value: 0x80n, length: 4, bytes: new Uint8Array([0x00, 0x00, 0x00, 0x80]) },
    { value: 0x7fffffffn, length: 4, bytes: new Uint8Array([0x7f, 0xff, 0xff, 0xff]) },
    { value: -0x81n, length: 4, bytes: new Uint8Array([0xff, 0xff, 0xff, 0x7f]) },
    { value: -0x65432110n, length: 4, bytes: new Uint8Array([0x9a, 0xbc, 0xde, 0xf0]) },
    { value: -0x0f214366n, length: 4, bytes: new Uint8Array([0xf0, 0xde, 0xbc, 0x9a]) },
  ];
  for (const { value, length, bytes } of vectors) {
    assert(equals(Uint8ArrayExtension.fromInt(value, false, length), bytes));
    assert(equals(Uint8ArrayExtension.fromInt(value, true, length), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromIntBE(value, length), bytes));
    assert(equals(Uint8ArrayExtension.fromIntLE(value, length), bytes.slice().reverse()));
    assert(new Uint8ArrayExtension(bytes).toBigInt(false) === BigInt(value));
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).toBigInt(true) === BigInt(value));
    assert(new Uint8ArrayExtension(bytes).toBigIntBE() === BigInt(value));
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).toBigIntLE() === BigInt(value));
  }
});

Deno.test('fromUint/toUint', () => {
  const vectors = [
    { value: 0, bytes: new Uint8Array([]) },
    { value: 0, length: 0, bytes: new Uint8Array([]) },
    { value: 0, length: 1, bytes: new Uint8Array([0]) },
    { value: 1, bytes: new Uint8Array([1]) },
    { value: 1, length: 1, bytes: new Uint8Array([1]) },
    { value: 0x102, bytes: new Uint8Array([1, 2]) },
    { value: 0x102, length: 2, bytes: new Uint8Array([1, 2]) },
    { value: 0x102, length: 3, bytes: new Uint8Array([0, 1, 2]) },
    { value: 0x12345678n, bytes: new Uint8Array([0x12, 0x34, 0x56, 0x78]) },
    { value: 0x78563412n, bytes: new Uint8Array([0x78, 0x56, 0x34, 0x12]) },
    { value: 0x9abcdef0n, bytes: new Uint8Array([0x9a, 0xbc, 0xde, 0xf0]) },
    { value: 0xf0debc9an, bytes: new Uint8Array([0xf0, 0xde, 0xbc, 0x9a]) },
  ];
  for (const { value, length, bytes } of vectors) {
    assert(equals(Uint8ArrayExtension.fromUint(value, false, length), bytes));
    assert(equals(Uint8ArrayExtension.fromUint(value, true, length), bytes.slice().reverse()));
    assert(equals(Uint8ArrayExtension.fromUintBE(value, length), bytes));
    assert(equals(Uint8ArrayExtension.fromUintLE(value, length), bytes.slice().reverse()));
    assert(new Uint8ArrayExtension(bytes).toBigUint(false) === BigInt(value));
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).toBigUint(true) === BigInt(value));
    assert(new Uint8ArrayExtension(bytes).toBigUintBE() === BigInt(value));
    assert(new Uint8ArrayExtension(bytes.slice().reverse()).toBigUintLE() === BigInt(value));
  }
});
