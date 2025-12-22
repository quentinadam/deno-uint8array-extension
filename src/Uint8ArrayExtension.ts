import concat from './concat.ts';
import equals from './equals.ts';
import fromInt from './fromInt.ts';
import fromInt16 from './fromInt16.ts';
import fromInt16BE from './fromInt16BE.ts';
import fromInt16LE from './fromInt16LE.ts';
import fromInt32 from './fromInt32.ts';
import fromInt32BE from './fromInt32BE.ts';
import fromInt32LE from './fromInt32LE.ts';
import fromInt64 from './fromInt64.ts';
import fromInt64BE from './fromInt64BE.ts';
import fromInt64LE from './fromInt64LE.ts';
import fromIntBE from './fromIntBE.ts';
import fromIntLE from './fromIntLE.ts';
import fromUint from './fromUint.ts';
import fromUint16 from './fromUint16.ts';
import fromUint16BE from './fromUint16BE.ts';
import fromUint16LE from './fromUint16LE.ts';
import fromUint32 from './fromUint32.ts';
import fromUint32BE from './fromUint32BE.ts';
import fromUint32LE from './fromUint32LE.ts';
import fromUint64 from './fromUint64.ts';
import fromUint64BE from './fromUint64BE.ts';
import fromUint64LE from './fromUint64LE.ts';
import fromUintBE from './fromUintBE.ts';
import fromUintLE from './fromUintLE.ts';
import getBigInt64 from './getBigInt64.ts';
import getBigInt64BE from './getBigInt64BE.ts';
import getBigInt64LE from './getBigInt64LE.ts';
import getBigUint64 from './getBigUint64.ts';
import getBigUint64BE from './getBigUint64BE.ts';
import getBigUint64LE from './getBigUint64LE.ts';
import getDataView from './getDataView.ts';
import getInt16 from './getInt16.ts';
import getInt16BE from './getInt16BE.ts';
import getInt16LE from './getInt16LE.ts';
import getInt32 from './getInt32.ts';
import getInt32BE from './getInt32BE.ts';
import getInt32LE from './getInt32LE.ts';
import getUint16 from './getUint16.ts';
import getUint16BE from './getUint16BE.ts';
import getUint16LE from './getUint16LE.ts';
import getUint32 from './getUint32.ts';
import getUint32BE from './getUint32BE.ts';
import getUint32LE from './getUint32LE.ts';
import padEnd from './padEnd.ts';
import padStart from './padStart.ts';
import setInt16 from './setInt16.ts';
import setInt16BE from './setInt16BE.ts';
import setInt16LE from './setInt16LE.ts';
import setInt32 from './setInt32.ts';
import setInt32BE from './setInt32BE.ts';
import setInt32LE from './setInt32LE.ts';
import setInt64 from './setInt64.ts';
import setInt64BE from './setInt64BE.ts';
import setInt64LE from './setInt64LE.ts';
import setUint16 from './setUint16.ts';
import setUint16BE from './setUint16BE.ts';
import setUint16LE from './setUint16LE.ts';
import setUint32 from './setUint32.ts';
import setUint32BE from './setUint32BE.ts';
import setUint32LE from './setUint32LE.ts';
import setUint64 from './setUint64.ts';
import setUint64BE from './setUint64BE.ts';
import setUint64LE from './setUint64LE.ts';
import toBigInt from './toBigInt.ts';
import toBigIntBE from './toBigIntBE.ts';
import toBigIntLE from './toBigIntLE.ts';
import toBigUint from './toBigUint.ts';
import toBigUintBE from './toBigUintBE.ts';
import toBigUintLE from './toBigUintLE.ts';

export default class Uint8ArrayExtension {
  readonly #buffer;

  constructor(buffer: Uint8Array<ArrayBuffer>) {
    this.#buffer = buffer;
  }

  concat(...bytess: Uint8Array<ArrayBuffer>[]): Uint8Array<ArrayBuffer> {
    return concat([this.#buffer, ...bytess]);
  }

  equals(other: Uint8Array<ArrayBuffer>): boolean {
    return equals(this.#buffer, other);
  }

  getInt16(offset: number, littleEndian: boolean): number {
    return getInt16(this.#buffer, offset, littleEndian);
  }

  getInt16BE(offset: number): number {
    return getInt16BE(this.#buffer, offset);
  }

  getInt16LE(offset: number): number {
    return getInt16LE(this.#buffer, offset);
  }

  getInt32(offset: number, littleEndian: boolean): number {
    return getInt32(this.#buffer, offset, littleEndian);
  }

  getInt32BE(offset: number): number {
    return getInt32BE(this.#buffer, offset);
  }

  getInt32LE(offset: number): number {
    return getInt32LE(this.#buffer, offset);
  }

  getBigInt64(offset: number, littleEndian: boolean): bigint {
    return getBigInt64(this.#buffer, offset, littleEndian);
  }

  getBigInt64BE(offset: number): bigint {
    return getBigInt64BE(this.#buffer, offset);
  }

  getBigInt64LE(offset: number): bigint {
    return getBigInt64LE(this.#buffer, offset);
  }

  getUint16(offset: number, littleEndian: boolean): number {
    return getUint16(this.#buffer, offset, littleEndian);
  }

  getUint16BE(offset: number): number {
    return getUint16BE(this.#buffer, offset);
  }

  getUint16LE(offset: number): number {
    return getUint16LE(this.#buffer, offset);
  }

  getUint32(offset: number, littleEndian: boolean): number {
    return getUint32(this.#buffer, offset, littleEndian);
  }

  getUint32BE(offset: number): number {
    return getUint32BE(this.#buffer, offset);
  }

  getUint32LE(offset: number): number {
    return getUint32LE(this.#buffer, offset);
  }

  getBigUint64(offset: number, littleEndian: boolean): bigint {
    return getBigUint64(this.#buffer, offset, littleEndian);
  }

  getBigUint64BE(offset: number): bigint {
    return getBigUint64BE(this.#buffer, offset);
  }

  getBigUint64LE(offset: number): bigint {
    return getBigUint64LE(this.#buffer, offset);
  }

  getDataView(): DataView {
    return getDataView(this.#buffer);
  }

  padStart(length: number): Uint8Array<ArrayBuffer> {
    return padStart(this.#buffer, length);
  }

  padEnd(length: number): Uint8Array<ArrayBuffer> {
    return padEnd(this.#buffer, length);
  }

  setInt16(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return setInt16(this.#buffer, offset, value, littleEndian);
  }

  setInt16BE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setInt16BE(this.#buffer, offset, value);
  }

  setInt16LE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setInt16LE(this.#buffer, offset, value);
  }

  setInt32(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return setInt32(this.#buffer, offset, value, littleEndian);
  }

  setInt32BE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setInt32BE(this.#buffer, offset, value);
  }

  setInt32LE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setInt32LE(this.#buffer, offset, value);
  }

  setInt64(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return setInt64(this.#buffer, offset, value, littleEndian);
  }

  setInt64BE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setInt64BE(this.#buffer, offset, value);
  }

  setInt64LE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setInt64LE(this.#buffer, offset, value);
  }

  setUint16(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return setUint16(this.#buffer, offset, value, littleEndian);
  }

  setUint16BE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setUint16BE(this.#buffer, offset, value);
  }

  setUint16LE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setUint16LE(this.#buffer, offset, value);
  }

  setUint32(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return setUint32(this.#buffer, offset, value, littleEndian);
  }

  setUint32BE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setUint32BE(this.#buffer, offset, value);
  }

  setUint32LE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setUint32LE(this.#buffer, offset, value);
  }

  setUint64(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return setUint64(this.#buffer, offset, value, littleEndian);
  }

  setUint64BE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setUint64BE(this.#buffer, offset, value);
  }

  setUint64LE(offset: number, value: number | bigint): Uint8Array<ArrayBuffer> {
    return setUint64LE(this.#buffer, offset, value);
  }

  toBigInt(littleEndian: boolean): bigint {
    return toBigInt(this.#buffer, littleEndian);
  }

  toBigIntBE(): bigint {
    return toBigIntBE(this.#buffer);
  }

  toBigIntLE(): bigint {
    return toBigIntLE(this.#buffer);
  }

  toBigUint(littleEndian: boolean): bigint {
    return toBigUint(this.#buffer, littleEndian);
  }

  toBigUintBE(): bigint {
    return toBigUintBE(this.#buffer);
  }

  toBigUintLE(): bigint {
    return toBigUintLE(this.#buffer);
  }

  static concat(bytess: Uint8Array<ArrayBuffer>[]): Uint8Array<ArrayBuffer> {
    return concat(bytess);
  }

  static equals(a: Uint8Array<ArrayBuffer>, b: Uint8Array<ArrayBuffer>): boolean {
    return equals(a, b);
  }

  static fromInt16(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromInt16(value, littleEndian);
  }

  static fromInt16BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt16BE(value);
  }

  static fromInt16LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt16LE(value);
  }

  static fromInt32(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromInt32(value, littleEndian);
  }

  static fromInt32BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt32BE(value);
  }

  static fromInt32LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt32LE(value);
  }

  static fromInt64(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromInt64(value, littleEndian);
  }

  static fromInt64BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt64BE(value);
  }

  static fromInt64LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt64LE(value);
  }

  static fromInt(value: number | bigint, littleEndian: boolean, length?: number): Uint8Array<ArrayBuffer> {
    return fromInt(value, littleEndian, length);
  }

  static fromIntBE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
    return fromIntBE(value, length);
  }

  static fromIntLE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
    return fromIntLE(value, length);
  }

  static fromUint16(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromUint16(value, littleEndian);
  }

  static fromUint16BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint16BE(value);
  }

  static fromUint16LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint16LE(value);
  }

  static fromUint32(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromUint32(value, littleEndian);
  }

  static fromUint32BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint32BE(value);
  }

  static fromUint32LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint32LE(value);
  }

  static fromUint64(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromUint64(value, littleEndian);
  }

  static fromUint64BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint64BE(value);
  }

  static fromUint64LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint64LE(value);
  }

  static fromUint(value: number | bigint, littleEndian: boolean, length?: number): Uint8Array<ArrayBuffer> {
    return fromUint(value, littleEndian, length);
  }

  static fromUintBE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
    return fromUintBE(value, length);
  }

  static fromUintLE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
    return fromUintLE(value, length);
  }
}

export {
  concat,
  equals,
  fromInt,
  fromInt16,
  fromInt16BE,
  fromInt16LE,
  fromInt32,
  fromInt32BE,
  fromInt32LE,
  fromInt64,
  fromInt64BE,
  fromInt64LE,
  fromIntBE,
  fromIntLE,
  fromUint,
  fromUint16,
  fromUint16BE,
  fromUint16LE,
  fromUint32,
  fromUint32BE,
  fromUint32LE,
  fromUint64,
  fromUint64BE,
  fromUint64LE,
  fromUintBE,
  fromUintLE,
  getBigInt64,
  getBigInt64BE,
  getBigInt64LE,
  getBigUint64,
  getBigUint64BE,
  getBigUint64LE,
  getDataView,
  getInt16,
  getInt16BE,
  getInt16LE,
  getInt32,
  getInt32BE,
  getInt32LE,
  getUint16,
  getUint16BE,
  getUint16LE,
  getUint32,
  getUint32BE,
  getUint32LE,
  padEnd,
  padStart,
  setInt16,
  setInt16BE,
  setInt16LE,
  setInt32,
  setInt32BE,
  setInt32LE,
  setInt64,
  setInt64BE,
  setInt64LE,
  setUint16,
  setUint16BE,
  setUint16LE,
  setUint32,
  setUint32BE,
  setUint32LE,
  setUint64,
  setUint64BE,
  setUint64LE,
  toBigInt,
  toBigIntBE,
  toBigIntLE,
  toBigUint,
  toBigUintBE,
  toBigUintLE,
};
