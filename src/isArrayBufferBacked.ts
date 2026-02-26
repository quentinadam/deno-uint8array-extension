export default function isArrayBufferBacked(target: Uint8Array<ArrayBufferLike>): target is Uint8Array<ArrayBuffer> {
  return target.buffer instanceof ArrayBuffer;
}
