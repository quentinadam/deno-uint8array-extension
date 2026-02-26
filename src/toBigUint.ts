export default function toBigUint(target: Uint8Array, littleEndian: boolean): bigint {
  const bytes = littleEndian ? target.toReversed() : target;
  let result = BigInt(0);
  for (const byte of bytes) {
    result = (result << 8n) | BigInt(byte);
  }
  return result;
}
