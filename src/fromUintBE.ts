import fromUintLE from './fromUintLE.ts';

export default function fromUintBE(value: number | bigint, length?: number): Uint8Array<ArrayBuffer> {
  return fromUintLE(value, length).reverse();
}
