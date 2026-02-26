import toBigUint from './toBigUint.ts';

export default function toBigUintBE(target: Uint8Array): bigint {
  return toBigUint(target, false);
}
