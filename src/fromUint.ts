import fromUintBE from './fromUintBE.ts';
import fromUintLE from './fromUintLE.ts';

export default function fromUint(
  value: number | bigint,
  littleEndian: boolean,
  length?: number,
): Uint8Array<ArrayBuffer> {
  return littleEndian ? fromUintLE(value, length) : fromUintBE(value, length);
}
