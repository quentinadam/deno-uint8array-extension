import fromIntLE from './fromIntLE.ts';

export default function fromIntBE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
  return fromIntLE(value, length).reverse();
}
