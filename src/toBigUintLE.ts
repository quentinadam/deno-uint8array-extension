import toBigUint from './toBigUint.ts';

export default function toBigUintLE(target: Uint8Array): bigint {
  return toBigUint(target, true);
}
