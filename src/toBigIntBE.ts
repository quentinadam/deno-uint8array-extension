import toBigInt from './toBigInt.ts';

export default function toBigIntBE(target: Uint8Array<ArrayBuffer>): bigint {
  return toBigInt(target, false);
}
