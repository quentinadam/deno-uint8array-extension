import assert from '@quentinadam/assert';
import concat from './concat.ts';

export default class Uint8ArrayExtension {
  readonly #buffer;
  readonly #dataView;

  constructor(buffer: Uint8Array) {
    this.#buffer = buffer;
    this.#dataView = new DataView(buffer.buffer);
  }

  #getUint16(offset: number, littleEndian: boolean) {
    return this.#dataView.getUint16(offset, littleEndian);
  }

  getUint16BE(offset: number): number {
    return this.#getUint16(offset, false);
  }

  getUint16LE(offset: number): number {
    return this.#getUint16(offset, true);
  }

  #getUint32(offset: number, littleEndian: boolean) {
    return this.#dataView.getUint32(offset, littleEndian);
  }

  getUint32BE(offset: number): number {
    return this.#getUint32(offset, false);
  }

  getUint32LE(offset: number): number {
    return this.#getUint32(offset, true);
  }

  #getBigUint64(offset: number, littleEndian: boolean) {
    return this.#dataView.getBigUint64(offset, littleEndian);
  }

  getBigUint64BE(offset: number): bigint {
    return this.#getBigUint64(offset, false);
  }

  getBigUint64LE(offset: number): bigint {
    return this.#getBigUint64(offset, true);
  }

  padStart(length: number): Uint8Array {
    if (this.#buffer.length >= length) {
      return this.#buffer;
    }
    return concat([new Uint8Array(length - this.#buffer.length), this.#buffer]);
  }

  padEnd(length: number): Uint8Array {
    if (this.#buffer.length >= length) {
      return this.#buffer;
    }
    return concat([this.#buffer, new Uint8Array(length - this.#buffer.length)]);
  }

  #setUint16(offset: number, value: number | bigint, littleEndian: boolean) {
    if (typeof value === 'bigint') {
      value = Number(value);
    }
    this.#dataView.setUint16(offset, value, littleEndian);
    return this.#buffer;
  }

  setUint16LE(offset: number, value: number): Uint8Array {
    return this.#setUint16(offset, value, true);
  }

  setUint16BE(offset: number, value: number): Uint8Array {
    return this.#setUint16(offset, value, false);
  }

  #setUint32(offset: number, value: number | bigint, littleEndian: boolean) {
    if (typeof value === 'bigint') {
      value = Number(value);
    }
    this.#dataView.setUint32(offset, value, littleEndian);
    return this.#buffer;
  }

  setUint32LE(offset: number, value: number): Uint8Array {
    return this.#setUint32(offset, value, true);
  }

  setUint32BE(offset: number, value: number): Uint8Array {
    return this.#setUint32(offset, value, false);
  }

  #setUint64(offset: number, value: number | bigint, littleEndian: boolean) {
    if (typeof value === 'number') {
      value = BigInt(value);
    }
    this.#dataView.setBigUint64(offset, value, littleEndian);
    return this.#buffer;
  }

  setUint64LE(offset: number, value: number | bigint): Uint8Array {
    return this.#setUint64(offset, value, true);
  }

  setUint64BE(offset: number, value: number | bigint): Uint8Array {
    return this.#setUint64(offset, value, false);
  }

  #toBigUint(littleEndian: boolean) {
    const buffer = littleEndian ? this.#buffer.slice().reverse() : this.#buffer;
    let result = BigInt(0);
    for (const byte of buffer) {
      result = (result << 8n) | BigInt(byte);
    }
    return result;
  }

  toBigUintBE(): bigint {
    return this.#toBigUint(false);
  }

  toBigUintLE(): bigint {
    return this.#toBigUint(true);
  }

  static concat(buffers: Uint8Array[]): Uint8Array {
    return concat(buffers);
  }

  static #fromUint16(value: number | bigint, littleEndian: boolean) {
    return new Uint8ArrayExtension(new Uint8Array(2)).#setUint16(0, value, littleEndian);
  }

  static fromUint16BE(value: number | bigint): Uint8Array {
    return this.#fromUint16(value, false);
  }

  static fromUint16LE(value: number | bigint): Uint8Array {
    return this.#fromUint16(value, true);
  }

  static #fromUint32(value: number | bigint, littleEndian: boolean) {
    return new Uint8ArrayExtension(new Uint8Array(4)).#setUint32(0, value, littleEndian);
  }

  static fromUint32BE(value: number | bigint): Uint8Array {
    return this.#fromUint32(value, false);
  }

  static fromUint32LE(value: number | bigint): Uint8Array {
    return this.#fromUint32(value, true);
  }

  static #fromUint64(value: number | bigint, littleEndian: boolean) {
    return new Uint8ArrayExtension(new Uint8Array(8)).#setUint64(0, value, littleEndian);
  }

  static fromUint64BE(value: number | bigint): Uint8Array {
    return this.#fromUint64(value, false);
  }

  static fromUint64LE(value: number | bigint): Uint8Array {
    return this.#fromUint64(value, true);
  }

  static fromUintBE(value: number | bigint, length?: number): Uint8Array {
    if (typeof value === 'number') {
      value = BigInt(value);
    }
    return this.fromUintLE(value, length).reverse();
  }

  static fromUintLE(value: number | bigint, length?: number): Uint8Array {
    if (typeof value === 'number') {
      value = BigInt(value);
    }
    assert(value >= 0n, `number ${value} is negative`);
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

  equals(a: Uint8Array, b: Uint8Array): boolean {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
}
