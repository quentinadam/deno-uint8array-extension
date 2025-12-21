import toBigUint from './toBigUint.ts';

export default function toBigUintBE(target: Uint8Array<ArrayBuffer>): bigint {
  return toBigUint(target, false);
}
