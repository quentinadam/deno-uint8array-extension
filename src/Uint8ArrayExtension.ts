import assert from '@quentinadam/assert';
import concat from './concat.ts';
import equals from './equals.ts';

export default class Uint8ArrayExtension {
  readonly #buffer;
  readonly #dataView;

  constructor(buffer: Uint8Array<ArrayBuffer>) {
    this.#buffer = buffer;
    this.#dataView = new DataView(buffer.buffer);
  }

  concat(...buffers: Uint8Array<ArrayBuffer>[]): Uint8Array<ArrayBuffer> {
    return concat([this.#buffer, ...buffers]);
  }

  equals(other: Uint8Array<ArrayBuffer>): boolean {
    return equals(this.#buffer, other);
  }

  getInt16(offset: number, littleEndian: boolean): number {
    return this.#dataView.getInt16(offset, littleEndian);
  }

  getInt16BE(offset: number): number {
    return this.getInt16(offset, false);
  }

  getInt16LE(offset: number): number {
    return this.getInt16(offset, true);
  }

  getInt32(offset: number, littleEndian: boolean): number {
    return this.#dataView.getInt32(offset, littleEndian);
  }

  getInt32BE(offset: number): number {
    return this.getInt32(offset, false);
  }

  getInt32LE(offset: number): number {
    return this.getInt32(offset, true);
  }

  getBigInt64(offset: number, littleEndian: boolean): bigint {
    return this.#dataView.getBigInt64(offset, littleEndian);
  }

  getBigInt64BE(offset: number): bigint {
    return this.getBigInt64(offset, false);
  }

  getBigInt64LE(offset: number): bigint {
    return this.getBigInt64(offset, true);
  }

  getUint16(offset: number, littleEndian: boolean): number {
    return this.#dataView.getUint16(offset, littleEndian);
  }

  getUint16BE(offset: number): number {
    return this.getUint16(offset, false);
  }

  getUint16LE(offset: number): number {
    return this.getUint16(offset, true);
  }

  getUint32(offset: number, littleEndian: boolean): number {
    return this.#dataView.getUint32(offset, littleEndian);
  }

  getUint32BE(offset: number): number {
    return this.getUint32(offset, false);
  }

  getUint32LE(offset: number): number {
    return this.getUint32(offset, true);
  }

  getBigUint64(offset: number, littleEndian: boolean): bigint {
    return this.#dataView.getBigUint64(offset, littleEndian);
  }

  getBigUint64BE(offset: number): bigint {
    return this.getBigUint64(offset, false);
  }

  getBigUint64LE(offset: number): bigint {
    return this.getBigUint64(offset, true);
  }

  padStart(length: number): Uint8Array<ArrayBuffer> {
    assert(Number.isSafeInteger(length), `Length ${length} is not a safe integer`);
    if (this.#buffer.length >= length) {
      return this.#buffer;
    }
    return concat([new Uint8Array(length - this.#buffer.length), this.#buffer]);
  }

  padEnd(length: number): Uint8Array<ArrayBuffer> {
    assert(Number.isSafeInteger(length), `Length ${length} is not a safe integer`);
    if (this.#buffer.length >= length) {
      return this.#buffer;
    }
    return concat([this.#buffer, new Uint8Array(length - this.#buffer.length)]);
  }

  setInt16(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    if (typeof value === 'bigint') {
      value = Number(value);
    }
    assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
    assert(value >= -0x8000 && value < 0x8000, `Value ${value} is out of bounds for a 16-bit signed integer`);
    this.#dataView.setInt16(offset, value, littleEndian);
    return this.#buffer;
  }

  setInt16LE(offset: number, value: number): Uint8Array<ArrayBuffer> {
    return this.setInt16(offset, value, true);
  }

  setInt16BE(offset: number, value: number): Uint8Array<ArrayBuffer> {
    return this.setInt16(offset, value, false);
  }

  setInt32(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    if (typeof value === 'bigint') {
      value = Number(value);
    }
    assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
    assert(value >= -0x80000000 && value < 0x80000000, `Value ${value} is out of bounds for a 32-bit signed integer`);
    this.#dataView.setInt32(offset, value, littleEndian);
    return this.#buffer;
  }

  setInt32LE(offset: number, value: number): Uint8Array<ArrayBuffer> {
    return this.setInt32(offset, value, true);
  }

  setInt32BE(offset: number, value: number): Uint8Array<ArrayBuffer> {
    return this.setInt32(offset, value, false);
  }

  setInt64(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    if (typeof value === 'number') {
      assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
      value = BigInt(value);
    }
    assert(
      value >= -0x8000000000000000n && value < 0x8000000000000000n,
      `Value ${value} is out of bounds for a 64-bit signed integer`,
    );
    this.#dataView.setBigInt64(offset, value, littleEndian);
    return this.#buffer;
  }

  setInt64LE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.setInt64(offset, value, true);
  }

  setInt64BE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.setInt64(offset, value, false);
  }

  setUint16(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    if (typeof value === 'bigint') {
      value = Number(value);
    }
    assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
    assert(value >= 0 && value < 0x10000, `Value ${value} is out of bounds for a 16-bit unsigned integer`);
    this.#dataView.setUint16(offset, value, littleEndian);
    return this.#buffer;
  }

  setUint16LE(offset: number, value: number): Uint8Array<ArrayBuffer> {
    return this.setUint16(offset, value, true);
  }

  setUint16BE(offset: number, value: number): Uint8Array<ArrayBuffer> {
    return this.setUint16(offset, value, false);
  }

  setUint32(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    if (typeof value === 'bigint') {
      value = Number(value);
    }
    assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
    assert(value >= 0 && value < 0x100000000, `Value ${value} is out of bounds for a 32-bit unsigned integer`);
    this.#dataView.setUint32(offset, value, littleEndian);
    return this.#buffer;
  }

  setUint32LE(offset: number, value: number): Uint8Array<ArrayBuffer> {
    return this.setUint32(offset, value, true);
  }

  setUint32BE(offset: number, value: number): Uint8Array<ArrayBuffer> {
    return this.setUint32(offset, value, false);
  }

  setUint64(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    if (typeof value === 'number') {
      assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
      value = BigInt(value);
    }
    assert(
      value >= 0n && value < 0x10000000000000000n,
      `Value ${value} is out of bounds for a 64-bit unsigned integer`,
    );
    this.#dataView.setBigUint64(offset, value, littleEndian);
    return this.#buffer;
  }

  setUint64LE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.setUint64(offset, value, true);
  }

  setUint64BE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.setUint64(offset, value, false);
  }

  toBigInt(littleEndian: boolean): bigint {
    const buffer = littleEndian ? this.#buffer.slice().reverse() : this.#buffer;
    let result = BigInt(0);
    for (const byte of buffer) {
      result = (result << 8n) | BigInt(byte);
    }
    return this.#buffer.length > 0 && result >= (1n << (BigInt(this.#buffer.length) * 8n - 1n))
      ? result - (1n << BigInt(this.#buffer.length) * 8n)
      : result;
  }

  toBigIntBE(): bigint {
    return this.toBigInt(false);
  }

  toBigIntLE(): bigint {
    return this.toBigInt(true);
  }

  toBigUint(littleEndian: boolean): bigint {
    const buffer = littleEndian ? this.#buffer.slice().reverse() : this.#buffer;
    let result = BigInt(0);
    for (const byte of buffer) {
      result = (result << 8n) | BigInt(byte);
    }
    return result;
  }

  toBigUintBE(): bigint {
    return this.toBigUint(false);
  }

  toBigUintLE(): bigint {
    return this.toBigUint(true);
  }

  static concat(buffers: Uint8Array<ArrayBuffer>[]): Uint8Array<ArrayBuffer> {
    return concat(buffers);
  }

  static equals(a: Uint8Array<ArrayBuffer>, b: Uint8Array<ArrayBuffer>): boolean {
    return equals(a, b);
  }

  static fromInt16(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return new Uint8ArrayExtension(new Uint8Array(2)).setInt16(0, value, littleEndian);
  }

  static fromInt16BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromInt16(value, false);
  }

  static fromInt16LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromInt16(value, true);
  }

  static fromInt32(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return new Uint8ArrayExtension(new Uint8Array(4)).setInt32(0, value, littleEndian);
  }

  static fromInt32BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromInt32(value, false);
  }

  static fromInt32LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromInt32(value, true);
  }

  static fromInt64(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return new Uint8ArrayExtension(new Uint8Array(8)).setInt64(0, value, littleEndian);
  }

  static fromInt64BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromInt64(value, false);
  }

  static fromInt64LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromInt64(value, true);
  }

  static fromInt(value: number | bigint, littleEndian: boolean, length: number): Uint8Array<ArrayBuffer> {
    return littleEndian ? this.fromIntLE(value, length) : this.fromIntBE(value, length);
  }

  static fromIntBE(value: number | bigint, length: number): Uint8Array<ArrayBuffer> {
    return this.fromIntLE(value, length).reverse();
  }

  static fromIntLE(value: number | bigint, length: number): Uint8Array<ArrayBuffer> {
    if (typeof value === 'number') {
      assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
      value = BigInt(value);
    }
    assert(Number.isSafeInteger(length), `Length ${length} is not a safe integer`);
    if (value > 0n) {
      const maxValue = (1n << (BigInt(length) * 8n - 1n)) - 1n;
      assert(value <= maxValue, `Value ${value} is out of bounds for a ${length}-byte signed integer`);
    } else {
      const minValue = -(1n << (BigInt(length) * 8n - 1n));
      assert(value >= minValue, `Value ${value} is out of bounds for a ${length}-byte signed integer`);
    }
    if (value < 0n) {
      value = (1n << (BigInt(length) * 8n)) + value;
    }
    return this.fromUintLE(value, length);
  }

  static fromUint16(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return new Uint8ArrayExtension(new Uint8Array(2)).setUint16(0, value, littleEndian);
  }

  static fromUint16BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromUint16(value, false);
  }

  static fromUint16LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromUint16(value, true);
  }

  static fromUint32(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return new Uint8ArrayExtension(new Uint8Array(4)).setUint32(0, value, littleEndian);
  }

  static fromUint32BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromUint32(value, false);
  }

  static fromUint32LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromUint32(value, true);
  }

  static fromUint64(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return new Uint8ArrayExtension(new Uint8Array(8)).setUint64(0, value, littleEndian);
  }

  static fromUint64BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromUint64(value, false);
  }

  static fromUint64LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return this.fromUint64(value, true);
  }

  static fromUint(value: number | bigint, littleEndian: boolean, length?: number): Uint8Array<ArrayBuffer> {
    return littleEndian ? this.fromUintLE(value, length) : this.fromUintBE(value, length);
  }

  static fromUintBE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
    return this.fromUintLE(value, length).reverse();
  }

  static fromUintLE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
    if (typeof value === 'number') {
      assert(Number.isSafeInteger(value), `Value ${value} is not a safe integer`);
      value = BigInt(value);
    }
    if (length !== undefined) {
      assert(Number.isSafeInteger(length), `Length ${length} is not a safe integer`);
      const maxValue = (1n << (BigInt(length) * 8n)) - 1n;
      assert(value <= maxValue, `Value ${value} is out of bounds for a ${length}-byte unsigned integer`);
    }
    assert(value >= 0n, `Value ${value} is negative`);
    const bytes = new Array<number>();
    let current = value;
    while (current > 0) {
      bytes.push(Number(current & 0xffn));
      current = current >> 8n;
    }
    if (length !== undefined) {
      assert(bytes.length <= length, `number ${value} has more than ${length} bytes (${bytes.length})`);
      for (let i = bytes.length; i < length; i++) {
        bytes.push(0);
      }
    }
    return new Uint8Array(bytes);
  }
}

export { concat, equals };
