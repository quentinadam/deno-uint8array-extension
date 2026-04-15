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

export { Uint8ArrayExtension } from './Uint8ArrayExtension.ts';
export { concat } from './concat.ts';
export { equals } from './equals.ts';
export { fromInt } from './fromInt.ts';
export { fromInt16 } from './fromInt16.ts';
export { fromInt16BE } from './fromInt16BE.ts';
export { fromInt16LE } from './fromInt16LE.ts';
export { fromInt32 } from './fromInt32.ts';
export { fromInt32BE } from './fromInt32BE.ts';
export { fromInt32LE } from './fromInt32LE.ts';
export { fromInt64 } from './fromInt64.ts';
export { fromInt64BE } from './fromInt64BE.ts';
export { fromInt64LE } from './fromInt64LE.ts';
export { fromIntBE } from './fromIntBE.ts';
export { fromIntLE } from './fromIntLE.ts';
export { fromUint } from './fromUint.ts';
export { fromUint16 } from './fromUint16.ts';
export { fromUint16BE } from './fromUint16BE.ts';
export { fromUint16LE } from './fromUint16LE.ts';
export { fromUint32 } from './fromUint32.ts';
export { fromUint32BE } from './fromUint32BE.ts';
export { fromUint32LE } from './fromUint32LE.ts';
export { fromUint64 } from './fromUint64.ts';
export { fromUint64BE } from './fromUint64BE.ts';
export { fromUint64LE } from './fromUint64LE.ts';
export { fromUintBE } from './fromUintBE.ts';
export { fromUintLE } from './fromUintLE.ts';
export { getBigInt64 } from './getBigInt64.ts';
export { getBigInt64BE } from './getBigInt64BE.ts';
export { getBigInt64LE } from './getBigInt64LE.ts';
export { getBigUint64 } from './getBigUint64.ts';
export { getBigUint64BE } from './getBigUint64BE.ts';
export { getBigUint64LE } from './getBigUint64LE.ts';
export { getDataView } from './getDataView.ts';
export { getInt16 } from './getInt16.ts';
export { getInt16BE } from './getInt16BE.ts';
export { getInt16LE } from './getInt16LE.ts';
export { getInt32 } from './getInt32.ts';
export { getInt32BE } from './getInt32BE.ts';
export { getInt32LE } from './getInt32LE.ts';
export { getUint16 } from './getUint16.ts';
export { getUint16BE } from './getUint16BE.ts';
export { getUint16LE } from './getUint16LE.ts';
export { getUint32 } from './getUint32.ts';
export { getUint32BE } from './getUint32BE.ts';
export { getUint32LE } from './getUint32LE.ts';
export { isArrayBufferBacked } from './isArrayBufferBacked.ts';
export { padEnd } from './padEnd.ts';
export { padStart } from './padStart.ts';
export { setInt16 } from './setInt16.ts';
export { setInt16BE } from './setInt16BE.ts';
export { setInt16LE } from './setInt16LE.ts';
export { setInt32 } from './setInt32.ts';
export { setInt32BE } from './setInt32BE.ts';
export { setInt32LE } from './setInt32LE.ts';
export { setInt64 } from './setInt64.ts';
export { setInt64BE } from './setInt64BE.ts';
export { setInt64LE } from './setInt64LE.ts';
export { setUint16 } from './setUint16.ts';
export { setUint16BE } from './setUint16BE.ts';
export { setUint16LE } from './setUint16LE.ts';
export { setUint32 } from './setUint32.ts';
export { setUint32BE } from './setUint32BE.ts';
export { setUint32LE } from './setUint32LE.ts';
export { setUint64 } from './setUint64.ts';
export { setUint64BE } from './setUint64BE.ts';
export { setUint64LE } from './setUint64LE.ts';
export { toBigInt } from './toBigInt.ts';
export { toBigIntBE } from './toBigIntBE.ts';
export { toBigIntLE } from './toBigIntLE.ts';
export { toBigUint } from './toBigUint.ts';
export { toBigUintBE } from './toBigUintBE.ts';
export { toBigUintLE } from './toBigUintLE.ts';
