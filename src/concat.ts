export default function concat(buffers: Uint8Array[]): Uint8Array<ArrayBuffer> {
  const length = buffers.reduce((sum, bytes) => sum + bytes.length, 0);
  const result = new Uint8Array(length);
  buffers.reduce((offset, bytes) => {
    result.set(bytes, offset);
    return offset + bytes.length;
  }, 0);
  return result;
}
