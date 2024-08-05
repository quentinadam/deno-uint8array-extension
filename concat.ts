export default function concat(buffers: Uint8Array[]): Uint8Array {
  const length = buffers.reduce((sum, buffer) => sum + buffer.length, 0);
  const result = new Uint8Array(length);
  buffers.reduce((offset, buffer) => {
    result.set(buffer, offset);
    return offset + buffer.length;
  }, 0);
  return result;
}
