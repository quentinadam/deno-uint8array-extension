export default function toBigUint(target: Uint8Array<ArrayBuffer>, littleEndian: boolean): bigint {
  const buffer = littleEndian ? target.toReversed() : target;
  let result = BigInt(0);
  for (const byte of buffer) {
    result = (result << 8n) | BigInt(byte);
  }
  return result;
}
