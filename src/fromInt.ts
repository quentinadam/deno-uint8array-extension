import fromIntBE from './fromIntBE.ts';
import fromIntLE from './fromIntLE.ts';

export default function fromInt(
  value: number | bigint,
  littleEndian: boolean,
  length: number,
): Uint8Array<ArrayBuffer> {
  return littleEndian ? fromIntLE(value, length) : fromIntBE(value, length);
}
