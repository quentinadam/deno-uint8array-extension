import toBigInt from './toBigInt.ts';

export default function toBigIntLE(target: Uint8Array<ArrayBuffer>): bigint {
  return toBigInt(target, true);
}
