/**
 * A library of Uint8Array extension functions for reading, writing, and manipulating binary data.
 *
 * This module provides utilities for working with Uint8Array, including:
 * - Reading and writing integers of various sizes (16, 32, 64-bit) with endianness control
 * - Converting between integers and byte arrays
 * - Array manipulation (concat, equals, padding)
 *
 * @example Using the Uint8ArrayExtension class
 * ```ts
 * import Uint8ArrayExtension from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * // Create a Uint8Array from a 32-bit unsigned integer (big-endian)
 * const bytes = Uint8ArrayExtension.fromUint32BE(1000);
 * assert(Uint8ArrayExtension.equals(bytes, new Uint8Array([0, 0, 3, 232])));
 *
 * // Read a value back from the array
 * const value = new Uint8ArrayExtension(bytes).getUint32BE(0);
 * assert(value === 1000);
 * ```
 *
 * @example Using standalone functions
 * ```ts
 * import { concat, fromUint32BE, getUint32BE } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = fromUint32BE(1000);
 * const value = getUint32BE(bytes, 0);
 * assert(value === 1000);
 * ```
 *
 * @module Uint8ArrayExtension
 */

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
import isArrayBufferBacked from './isArrayBufferBacked.ts';
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

/**
 * A wrapper class that provides extension methods for Uint8Array manipulation.
 *
 * This class wraps an existing Uint8Array and provides instance methods for reading,
 * writing, and manipulating binary data. It also provides static methods that can be
 * called without creating an instance.
 *
 * @example Instance methods
 * ```ts
 * import Uint8ArrayExtension from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([0, 0, 3, 232]);
 * const ext = new Uint8ArrayExtension(bytes);
 * assert(ext.getUint32BE(0) === 1000);
 * ```
 *
 * @example Static methods
 * ```ts
 * import Uint8ArrayExtension from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = Uint8ArrayExtension.fromUint32BE(1000);
 * assert(Uint8ArrayExtension.equals(bytes, new Uint8Array([0, 0, 3, 232])));
 * ```
 *
 * @template T The type of ArrayBuffer backing the Uint8Array.
 */
export default class Uint8ArrayExtension<T extends ArrayBufferLike> {
  /** The underlying Uint8Array wrapped by this instance. */
  readonly bytes: Uint8Array<T>;

  /**
   * Creates a new Uint8ArrayExtension instance wrapping the given Uint8Array.
   * @param bytes The Uint8Array to wrap.
   */
  constructor(bytes: Uint8Array<T>) {
    this.bytes = bytes;
  }

  /**
   * Concatenates this array with additional Uint8Arrays.
   * @param buffers Additional arrays to concatenate.
   * @returns A new Uint8Array containing all bytes.
   */
  concat(...buffers: Uint8Array[]): Uint8Array<ArrayBuffer> {
    return concat([this.bytes, ...buffers]);
  }

  /**
   * Compares this array with another for byte-by-byte equality.
   * @param other The array to compare against.
   * @returns True if arrays are equal, false otherwise.
   */
  equals(other: Uint8Array): boolean {
    return equals(this.bytes, other);
  }

  /**
   * Reads a signed 16-bit integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @param littleEndian If true, reads as little-endian; otherwise big-endian.
   * @returns The signed 16-bit integer value.
   */
  getInt16(offset: number, littleEndian: boolean): number {
    return getInt16(this.bytes, offset, littleEndian);
  }

  /**
   * Reads a signed 16-bit big-endian integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The signed 16-bit integer value.
   */
  getInt16BE(offset: number): number {
    return getInt16BE(this.bytes, offset);
  }

  /**
   * Reads a signed 16-bit little-endian integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The signed 16-bit integer value.
   */
  getInt16LE(offset: number): number {
    return getInt16LE(this.bytes, offset);
  }

  /**
   * Reads a signed 32-bit integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @param littleEndian If true, reads as little-endian; otherwise big-endian.
   * @returns The signed 32-bit integer value.
   */
  getInt32(offset: number, littleEndian: boolean): number {
    return getInt32(this.bytes, offset, littleEndian);
  }

  /**
   * Reads a signed 32-bit big-endian integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The signed 32-bit integer value.
   */
  getInt32BE(offset: number): number {
    return getInt32BE(this.bytes, offset);
  }

  /**
   * Reads a signed 32-bit little-endian integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The signed 32-bit integer value.
   */
  getInt32LE(offset: number): number {
    return getInt32LE(this.bytes, offset);
  }

  /**
   * Reads a signed 64-bit integer as a bigint from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @param littleEndian If true, reads as little-endian; otherwise big-endian.
   * @returns The signed 64-bit integer value as bigint.
   */
  getBigInt64(offset: number, littleEndian: boolean): bigint {
    return getBigInt64(this.bytes, offset, littleEndian);
  }

  /**
   * Reads a signed 64-bit big-endian integer as a bigint from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The signed 64-bit integer value as bigint.
   */
  getBigInt64BE(offset: number): bigint {
    return getBigInt64BE(this.bytes, offset);
  }

  /**
   * Reads a signed 64-bit little-endian integer as a bigint from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The signed 64-bit integer value as bigint.
   */
  getBigInt64LE(offset: number): bigint {
    return getBigInt64LE(this.bytes, offset);
  }

  /**
   * Reads an unsigned 16-bit integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @param littleEndian If true, reads as little-endian; otherwise big-endian.
   * @returns The unsigned 16-bit integer value.
   */
  getUint16(offset: number, littleEndian: boolean): number {
    return getUint16(this.bytes, offset, littleEndian);
  }

  /**
   * Reads an unsigned 16-bit big-endian integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The unsigned 16-bit integer value.
   */
  getUint16BE(offset: number): number {
    return getUint16BE(this.bytes, offset);
  }

  /**
   * Reads an unsigned 16-bit little-endian integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The unsigned 16-bit integer value.
   */
  getUint16LE(offset: number): number {
    return getUint16LE(this.bytes, offset);
  }

  /**
   * Reads an unsigned 32-bit integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @param littleEndian If true, reads as little-endian; otherwise big-endian.
   * @returns The unsigned 32-bit integer value.
   */
  getUint32(offset: number, littleEndian: boolean): number {
    return getUint32(this.bytes, offset, littleEndian);
  }

  /**
   * Reads an unsigned 32-bit big-endian integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The unsigned 32-bit integer value.
   */
  getUint32BE(offset: number): number {
    return getUint32BE(this.bytes, offset);
  }

  /**
   * Reads an unsigned 32-bit little-endian integer from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The unsigned 32-bit integer value.
   */
  getUint32LE(offset: number): number {
    return getUint32LE(this.bytes, offset);
  }

  /**
   * Reads an unsigned 64-bit integer as a bigint from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @param littleEndian If true, reads as little-endian; otherwise big-endian.
   * @returns The unsigned 64-bit integer value as bigint.
   */
  getBigUint64(offset: number, littleEndian: boolean): bigint {
    return getBigUint64(this.bytes, offset, littleEndian);
  }

  /**
   * Reads an unsigned 64-bit big-endian integer as a bigint from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The unsigned 64-bit integer value as bigint.
   */
  getBigUint64BE(offset: number): bigint {
    return getBigUint64BE(this.bytes, offset);
  }

  /**
   * Reads an unsigned 64-bit little-endian integer as a bigint from the array at the specified offset.
   * @param offset The byte offset to read from.
   * @returns The unsigned 64-bit integer value as bigint.
   */
  getBigUint64LE(offset: number): bigint {
    return getBigUint64LE(this.bytes, offset);
  }

  /**
   * Creates a DataView for the underlying buffer.
   * @returns A DataView for accessing the buffer data.
   */
  getDataView(): DataView {
    return getDataView(this.bytes);
  }

  /**
   * Checks if the underlying buffer is an ArrayBuffer (not SharedArrayBuffer).
   * @returns True if backed by ArrayBuffer.
   */
  isArrayBufferBacked(): this is Uint8ArrayExtension<ArrayBuffer> {
    return isArrayBufferBacked(this.bytes);
  }

  /**
   * Pads the array at the start with zero bytes to reach the specified length.
   * @param length The target length.
   * @returns A new Uint8Array with padding, or the original if already long enough.
   */
  padStart(length: number): Uint8Array<ArrayBuffer> {
    return padStart(this.bytes, length);
  }

  /**
   * Pads the array at the end with zero bytes to reach the specified length.
   * @param length The target length.
   * @returns A new Uint8Array with padding, or the original if already long enough.
   */
  padEnd(length: number): Uint8Array<ArrayBuffer> {
    return padEnd(this.bytes, length);
  }

  /**
   * Writes a signed 16-bit integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @param littleEndian If true, writes as little-endian; otherwise big-endian.
   * @returns The modified Uint8Array.
   */
  setInt16(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<T> {
    return setInt16(this.bytes, offset, value, littleEndian);
  }

  /**
   * Writes a signed 16-bit big-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setInt16BE(offset: number, value: number | bigint): Uint8Array<T> {
    return setInt16BE(this.bytes, offset, value);
  }

  /**
   * Writes a signed 16-bit little-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setInt16LE(offset: number, value: number | bigint): Uint8Array<T> {
    return setInt16LE(this.bytes, offset, value);
  }

  /**
   * Writes a signed 32-bit integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @param littleEndian If true, writes as little-endian; otherwise big-endian.
   * @returns The modified Uint8Array.
   */
  setInt32(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<T> {
    return setInt32(this.bytes, offset, value, littleEndian);
  }

  /**
   * Writes a signed 32-bit big-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setInt32BE(offset: number, value: number | bigint): Uint8Array<T> {
    return setInt32BE(this.bytes, offset, value);
  }

  /**
   * Writes a signed 32-bit little-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setInt32LE(offset: number, value: number | bigint): Uint8Array<T> {
    return setInt32LE(this.bytes, offset, value);
  }

  /**
   * Writes a signed 64-bit integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @param littleEndian If true, writes as little-endian; otherwise big-endian.
   * @returns The modified Uint8Array.
   */
  setInt64(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<T> {
    return setInt64(this.bytes, offset, value, littleEndian);
  }

  /**
   * Writes a signed 64-bit big-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setInt64BE(offset: number, value: number | bigint): Uint8Array<T> {
    return setInt64BE(this.bytes, offset, value);
  }

  /**
   * Writes a signed 64-bit little-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setInt64LE(offset: number, value: number | bigint): Uint8Array<T> {
    return setInt64LE(this.bytes, offset, value);
  }

  /**
   * Writes an unsigned 16-bit integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @param littleEndian If true, writes as little-endian; otherwise big-endian.
   * @returns The modified Uint8Array.
   */
  setUint16(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<T> {
    return setUint16(this.bytes, offset, value, littleEndian);
  }

  /**
   * Writes an unsigned 16-bit big-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setUint16BE(offset: number, value: number | bigint): Uint8Array<T> {
    return setUint16BE(this.bytes, offset, value);
  }

  /**
   * Writes an unsigned 16-bit little-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setUint16LE(offset: number, value: number | bigint): Uint8Array<T> {
    return setUint16LE(this.bytes, offset, value);
  }

  /**
   * Writes an unsigned 32-bit integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @param littleEndian If true, writes as little-endian; otherwise big-endian.
   * @returns The modified Uint8Array.
   */
  setUint32(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<T> {
    return setUint32(this.bytes, offset, value, littleEndian);
  }

  /**
   * Writes an unsigned 32-bit big-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setUint32BE(offset: number, value: number | bigint): Uint8Array<T> {
    return setUint32BE(this.bytes, offset, value);
  }

  /**
   * Writes an unsigned 32-bit little-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setUint32LE(offset: number, value: number | bigint): Uint8Array<T> {
    return setUint32LE(this.bytes, offset, value);
  }

  /**
   * Writes an unsigned 64-bit integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @param littleEndian If true, writes as little-endian; otherwise big-endian.
   * @returns The modified Uint8Array.
   */
  setUint64(offset: number, value: number | bigint, littleEndian: boolean): Uint8Array<T> {
    return setUint64(this.bytes, offset, value, littleEndian);
  }

  /**
   * Writes an unsigned 64-bit big-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setUint64BE(offset: number, value: number | bigint): Uint8Array<T> {
    return setUint64BE(this.bytes, offset, value);
  }

  /**
   * Writes an unsigned 64-bit little-endian integer to the array at the specified offset.
   * @param offset The byte offset to write at.
   * @param value The value to write.
   * @returns The modified Uint8Array.
   */
  setUint64LE(offset: number, value: number | bigint): Uint8Array<T> {
    return setUint64LE(this.bytes, offset, value);
  }

  /**
   * Converts the entire array to a signed bigint.
   * @param littleEndian If true, interprets as little-endian; otherwise big-endian.
   * @returns The signed bigint value.
   */
  toBigInt(littleEndian: boolean): bigint {
    return toBigInt(this.bytes, littleEndian);
  }

  /**
   * Converts the entire array to a signed big-endian bigint.
   * @returns The signed bigint value.
   */
  toBigIntBE(): bigint {
    return toBigIntBE(this.bytes);
  }

  /**
   * Converts the entire array to a signed little-endian bigint.
   * @returns The signed bigint value.
   */
  toBigIntLE(): bigint {
    return toBigIntLE(this.bytes);
  }

  /**
   * Converts the entire array to an unsigned bigint.
   * @param littleEndian If true, interprets as little-endian; otherwise big-endian.
   * @returns The unsigned bigint value.
   */
  toBigUint(littleEndian: boolean): bigint {
    return toBigUint(this.bytes, littleEndian);
  }

  /**
   * Converts the entire array to an unsigned big-endian bigint.
   * @returns The unsigned bigint value.
   */
  toBigUintBE(): bigint {
    return toBigUintBE(this.bytes);
  }

  /**
   * Converts the entire array to an unsigned little-endian bigint.
   * @returns The unsigned bigint value.
   */
  toBigUintLE(): bigint {
    return toBigUintLE(this.bytes);
  }

  /**
   * Concatenates multiple Uint8Arrays into a single array.
   * @param buffers The arrays to concatenate.
   * @returns A new Uint8Array containing all bytes.
   */
  static concat(buffers: Uint8Array[]): Uint8Array<ArrayBuffer> {
    return concat(buffers);
  }

  /**
   * Compares two Uint8Arrays for byte-by-byte equality.
   * @param a The first array.
   * @param b The second array.
   * @returns True if arrays are equal, false otherwise.
   */
  static equals(a: Uint8Array, b: Uint8Array): boolean {
    return equals(a, b);
  }

  /**
   * Creates a 2-byte Uint8Array from a signed 16-bit integer.
   * @param value The value to convert.
   * @param littleEndian If true, uses little-endian; otherwise big-endian.
   * @returns A 2-byte Uint8Array.
   */
  static fromInt16(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromInt16(value, littleEndian);
  }

  /**
   * Creates a 2-byte big-endian Uint8Array from a signed 16-bit integer.
   * @param value The value to convert.
   * @returns A 2-byte Uint8Array.
   */
  static fromInt16BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt16BE(value);
  }

  /**
   * Creates a 2-byte little-endian Uint8Array from a signed 16-bit integer.
   * @param value The value to convert.
   * @returns A 2-byte Uint8Array.
   */
  static fromInt16LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt16LE(value);
  }

  /**
   * Creates a 4-byte Uint8Array from a signed 32-bit integer.
   * @param value The value to convert.
   * @param littleEndian If true, uses little-endian; otherwise big-endian.
   * @returns A 4-byte Uint8Array.
   */
  static fromInt32(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromInt32(value, littleEndian);
  }

  /**
   * Creates a 4-byte big-endian Uint8Array from a signed 32-bit integer.
   * @param value The value to convert.
   * @returns A 4-byte Uint8Array.
   */
  static fromInt32BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt32BE(value);
  }

  /**
   * Creates a 4-byte little-endian Uint8Array from a signed 32-bit integer.
   * @param value The value to convert.
   * @returns A 4-byte Uint8Array.
   */
  static fromInt32LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt32LE(value);
  }

  /**
   * Creates an 8-byte Uint8Array from a signed 64-bit integer.
   * @param value The value to convert.
   * @param littleEndian If true, uses little-endian; otherwise big-endian.
   * @returns An 8-byte Uint8Array.
   */
  static fromInt64(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromInt64(value, littleEndian);
  }

  /**
   * Creates an 8-byte big-endian Uint8Array from a signed 64-bit integer.
   * @param value The value to convert.
   * @returns An 8-byte Uint8Array.
   */
  static fromInt64BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt64BE(value);
  }

  /**
   * Creates an 8-byte little-endian Uint8Array from a signed 64-bit integer.
   * @param value The value to convert.
   * @returns An 8-byte Uint8Array.
   */
  static fromInt64LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromInt64LE(value);
  }

  /**
   * Creates a variable-length Uint8Array from a signed integer.
   * @param value The value to convert.
   * @param littleEndian If true, uses little-endian; otherwise big-endian.
   * @param length Optional fixed byte length for the output.
   * @returns A Uint8Array of the specified or minimum required length.
   */
  static fromInt(value: number | bigint, littleEndian: boolean, length?: number): Uint8Array<ArrayBuffer> {
    return fromInt(value, littleEndian, length);
  }

  /**
   * Creates a variable-length big-endian Uint8Array from a signed integer.
   * @param value The value to convert.
   * @param length Optional fixed byte length for the output.
   * @returns A Uint8Array of the specified or minimum required length.
   */
  static fromIntBE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
    return fromIntBE(value, length);
  }

  /**
   * Creates a variable-length little-endian Uint8Array from a signed integer.
   * @param value The value to convert.
   * @param length Optional fixed byte length for the output.
   * @returns A Uint8Array of the specified or minimum required length.
   */
  static fromIntLE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
    return fromIntLE(value, length);
  }

  /**
   * Creates a 2-byte Uint8Array from an unsigned 16-bit integer.
   * @param value The value to convert.
   * @param littleEndian If true, uses little-endian; otherwise big-endian.
   * @returns A 2-byte Uint8Array.
   */
  static fromUint16(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromUint16(value, littleEndian);
  }

  /**
   * Creates a 2-byte big-endian Uint8Array from an unsigned 16-bit integer.
   * @param value The value to convert.
   * @returns A 2-byte Uint8Array.
   */
  static fromUint16BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint16BE(value);
  }

  /**
   * Creates a 2-byte little-endian Uint8Array from an unsigned 16-bit integer.
   * @param value The value to convert.
   * @returns A 2-byte Uint8Array.
   */
  static fromUint16LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint16LE(value);
  }

  /**
   * Creates a 4-byte Uint8Array from an unsigned 32-bit integer.
   * @param value The value to convert.
   * @param littleEndian If true, uses little-endian; otherwise big-endian.
   * @returns A 4-byte Uint8Array.
   */
  static fromUint32(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromUint32(value, littleEndian);
  }

  /**
   * Creates a 4-byte big-endian Uint8Array from an unsigned 32-bit integer.
   * @param value The value to convert.
   * @returns A 4-byte Uint8Array.
   */
  static fromUint32BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint32BE(value);
  }

  /**
   * Creates a 4-byte little-endian Uint8Array from an unsigned 32-bit integer.
   * @param value The value to convert.
   * @returns A 4-byte Uint8Array.
   */
  static fromUint32LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint32LE(value);
  }

  /**
   * Creates an 8-byte Uint8Array from an unsigned 64-bit integer.
   * @param value The value to convert.
   * @param littleEndian If true, uses little-endian; otherwise big-endian.
   * @returns An 8-byte Uint8Array.
   */
  static fromUint64(value: number | bigint, littleEndian: boolean): Uint8Array<ArrayBuffer> {
    return fromUint64(value, littleEndian);
  }

  /**
   * Creates an 8-byte big-endian Uint8Array from an unsigned 64-bit integer.
   * @param value The value to convert.
   * @returns An 8-byte Uint8Array.
   */
  static fromUint64BE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint64BE(value);
  }

  /**
   * Creates an 8-byte little-endian Uint8Array from an unsigned 64-bit integer.
   * @param value The value to convert.
   * @returns An 8-byte Uint8Array.
   */
  static fromUint64LE(value: number | bigint): Uint8Array<ArrayBuffer> {
    return fromUint64LE(value);
  }

  /**
   * Creates a variable-length Uint8Array from an unsigned integer.
   * @param value The value to convert.
   * @param littleEndian If true, uses little-endian; otherwise big-endian.
   * @param length Optional fixed byte length for the output.
   * @returns A Uint8Array of the specified or minimum required length.
   */
  static fromUint(value: number | bigint, littleEndian: boolean, length?: number): Uint8Array<ArrayBuffer> {
    return fromUint(value, littleEndian, length);
  }

  /**
   * Creates a variable-length big-endian Uint8Array from an unsigned integer.
   * @param value The value to convert.
   * @param length Optional fixed byte length for the output.
   * @returns A Uint8Array of the specified or minimum required length.
   */
  static fromUintBE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
    return fromUintBE(value, length);
  }

  /**
   * Creates a variable-length little-endian Uint8Array from an unsigned integer.
   * @param value The value to convert.
   * @param length Optional fixed byte length for the output.
   * @returns A Uint8Array of the specified or minimum required length.
   */
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
  isArrayBufferBacked,
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
