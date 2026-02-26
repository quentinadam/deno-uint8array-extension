import toBigInt from './toBigInt.ts';

export default function toBigIntLE(target: Uint8Array): bigint {
  return toBigInt(target, true);
}
