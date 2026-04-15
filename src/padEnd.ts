import { assert } from '@quentinadam/assert';
import { concat } from './concat.ts';
import { isArrayBufferBacked } from './isArrayBufferBacked.ts';

/**
 * Pads a Uint8Array at the end with zero bytes to reach the specified length.
 *
 * If the array is already at least the specified length, returns the original array
 * (or a copy if not backed by ArrayBuffer).
 *
 * @example
 * ```ts
 * import { padEnd, equals } from "@quentinadam/uint8array-extension";
 * import assert from "@quentinadam/assert";
 *
 * const bytes = new Uint8Array([1, 2, 3]);
 * const padded = padEnd(bytes, 5);
 * assert(equals(padded, new Uint8Array([1, 2, 3, 0, 0])));
 * ```
 *
 * @param target The Uint8Array to pad.
 * @param length The target length.
 * @returns A Uint8Array of at least the specified length, padded with trailing zeros if necessary.
 * @throws If length is not a safe integer.
 */
export function padEnd(target: Uint8Array, length: number): Uint8Array<ArrayBuffer> {
  assert(Number.isSafeInteger(length), `Length ${length} is not a safe integer`);
  if (target.length >= length) {
    if (isArrayBufferBacked(target)) {
      return target;
    }
    return new Uint8Array(target);
  }
  return concat([target, new Uint8Array(length - target.length)]);
}
