export default function getDataView(buffer: Uint8Array<ArrayBuffer>): DataView {
  return new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
}
