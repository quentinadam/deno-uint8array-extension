import toBigInt from './toBigInt.ts';

export default function toBigIntBE(target: Uint8Array): bigint {
  return toBigInt(target, false);
}
