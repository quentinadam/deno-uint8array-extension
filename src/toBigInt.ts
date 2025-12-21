import toBigUint from './toBigUint.ts';

export default function toBigInt(target: Uint8Array<ArrayBuffer>, littleEndian: boolean): bigint {
  const result = toBigUint(target, littleEndian);
  return target.length > 0 && result >= (1n << (BigInt(target.length) * 8n - 1n))
    ? result - (1n << BigInt(target.length) * 8n)
    : result;
}
