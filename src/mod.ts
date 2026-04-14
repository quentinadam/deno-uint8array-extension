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
 * import { Uint8ArrayExtension } from "@quentinadam/uint8array-extension";
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
 * @module
 */

export * from './Uint8ArrayExtension.ts';
export * from './concat.ts';
export * from './equals.ts';
export * from './fromInt.ts';
export * from './fromInt16.ts';
export * from './fromInt16BE.ts';
export * from './fromInt16LE.ts';
export * from './fromInt32.ts';
export * from './fromInt32BE.ts';
export * from './fromInt32LE.ts';
export * from './fromInt64.ts';
export * from './fromInt64BE.ts';
export * from './fromInt64LE.ts';
export * from './fromIntBE.ts';
export * from './fromIntLE.ts';
export * from './fromUint.ts';
export * from './fromUint16.ts';
export * from './fromUint16BE.ts';
export * from './fromUint16LE.ts';
export * from './fromUint32.ts';
export * from './fromUint32BE.ts';
export * from './fromUint32LE.ts';
export * from './fromUint64.ts';
export * from './fromUint64BE.ts';
export * from './fromUint64LE.ts';
export * from './fromUintBE.ts';
export * from './fromUintLE.ts';
export * from './getBigInt64.ts';
export * from './getBigInt64BE.ts';
export * from './getBigInt64LE.ts';
export * from './getBigUint64.ts';
export * from './getBigUint64BE.ts';
export * from './getBigUint64LE.ts';
export * from './getDataView.ts';
export * from './getInt16.ts';
export * from './getInt16BE.ts';
export * from './getInt16LE.ts';
export * from './getInt32.ts';
export * from './getInt32BE.ts';
export * from './getInt32LE.ts';
export * from './getUint16.ts';
export * from './getUint16BE.ts';
export * from './getUint16LE.ts';
export * from './getUint32.ts';
export * from './getUint32BE.ts';
export * from './getUint32LE.ts';
export * from './isArrayBufferBacked.ts';
export * from './padEnd.ts';
export * from './padStart.ts';
export * from './setInt16.ts';
export * from './setInt16BE.ts';
export * from './setInt16LE.ts';
export * from './setInt32.ts';
export * from './setInt32BE.ts';
export * from './setInt32LE.ts';
export * from './setInt64.ts';
export * from './setInt64BE.ts';
export * from './setInt64LE.ts';
export * from './setUint16.ts';
export * from './setUint16BE.ts';
export * from './setUint16LE.ts';
export * from './setUint32.ts';
export * from './setUint32BE.ts';
export * from './setUint32LE.ts';
export * from './setUint64.ts';
export * from './setUint64BE.ts';
export * from './setUint64LE.ts';
export * from './toBigInt.ts';
export * from './toBigIntBE.ts';
export * from './toBigIntLE.ts';
export * from './toBigUint.ts';
export * from './toBigUintBE.ts';
export * from './toBigUintLE.ts';
