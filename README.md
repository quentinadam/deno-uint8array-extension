# @quentinadam/uint8array-extension

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A comprehensive library of Uint8Array extension functions for reading, writing, and manipulating binary data with full
support for different integer sizes and endianness.

## For AI Code Agents

If you're using AI-assisted coding tools like Claude Code, drag and drop the [SKILL.md](./SKILL.md) file into your
conversation to help the agent understand when and how to use this library.

## Installation

```bash
# Deno
deno add jsr:@quentinadam/uint8array-extension

# npm
npm install @quentinadam/uint8array-extension

# pnpm
pnpm add @quentinadam/uint8array-extension

# Bun
bun add @quentinadam/uint8array-extension
```

## Usage

There are three ways to consume this library:

### 1. Using the Uint8ArrayExtension Class (Instance Methods)

Create an instance wrapping an existing Uint8Array to access all methods:

```ts
import { equals, Uint8ArrayExtension } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = new Uint8Array([0, 0, 3, 232]);
const ext = new Uint8ArrayExtension(bytes);

// Read values
assert(ext.getUint32BE(0) === 1000);

// Write values (modifies the underlying array)
ext.setUint16BE(0, 1000);
assert(equals(bytes, new Uint8Array([3, 232, 3, 232])));

// Other operations
assert(equals(ext.padStart(8), new Uint8Array([0, 0, 0, 0, 3, 232, 3, 232])));
assert(ext.toBigUintBE() === 65537000n);
```

### 2. Using Static Methods on the Class

Call static methods directly on the Uint8ArrayExtension class:

```ts
import { Uint8ArrayExtension } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

// Create byte arrays from values
const bytes = Uint8ArrayExtension.fromUint32BE(1000);
assert(Uint8ArrayExtension.equals(bytes, new Uint8Array([0, 0, 3, 232])));

// Concatenate arrays
const combined = Uint8ArrayExtension.concat([
  new Uint8Array([1, 2]),
  new Uint8Array([3, 4]),
]);
assert(Uint8ArrayExtension.equals(combined, new Uint8Array([1, 2, 3, 4])));

// Compare arrays
assert(Uint8ArrayExtension.equals(bytes, bytes) === true);
```

### 3. Using Named Exports (Tree-Shakeable)

Import specific functions for smaller bundle sizes:

```ts
import { concat, equals, fromUint32BE, getUint32BE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = fromUint32BE(1000);
assert(getUint32BE(bytes, 0) === 1000);

const combined = concat([new Uint8Array([1, 2]), new Uint8Array([3, 4])]);
assert(equals(combined, new Uint8Array([1, 2, 3, 4])));
```

## API Reference

### Utility Functions

#### `concat(buffers: Uint8Array[]): Uint8Array`

Concatenates multiple Uint8Arrays into a single array.

```ts
import { concat, equals } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

assert(equals(concat([new Uint8Array([1, 2]), new Uint8Array([3, 4])]), new Uint8Array([1, 2, 3, 4])));
```

#### `equals(a: Uint8Array, b: Uint8Array): boolean`

Compares two Uint8Arrays for byte-by-byte equality.

```ts
import { equals } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

assert(equals(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 3])) === true);
assert(equals(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 4])) === false);
```

#### `padStart(target: Uint8Array, length: number): Uint8Array`

Pads the array at the start with zero bytes to reach the specified length.

```ts
import { equals, padStart } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

assert(equals(padStart(new Uint8Array([1, 2, 3]), 5), new Uint8Array([0, 0, 1, 2, 3])));
```

#### `padEnd(target: Uint8Array, length: number): Uint8Array`

Pads the array at the end with zero bytes to reach the specified length.

```ts
import { equals, padEnd } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

assert(equals(padEnd(new Uint8Array([1, 2, 3]), 5), new Uint8Array([1, 2, 3, 0, 0])));
```

#### `getDataView(bytes: Uint8Array): DataView`

Creates a DataView for accessing the underlying buffer.

```ts
import { getDataView } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const view = getDataView(new Uint8Array([0, 0, 3, 232]));
assert(view.getUint32(0, false) === 1000);
```

#### `isArrayBufferBacked(target: Uint8Array): boolean`

Type guard checking if the Uint8Array is backed by an ArrayBuffer (not SharedArrayBuffer).

```ts
import { isArrayBufferBacked } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

assert(isArrayBufferBacked(new Uint8Array([1, 2, 3])) === true);
```

---

### Converting Integers to Uint8Array (`from*` functions)

These functions create Uint8Arrays from integer values. Each comes in three variants:

- Base function with endianness parameter
- `BE` suffix for big-endian
- `LE` suffix for little-endian

#### Fixed-Size Unsigned Integers

| Function                                     | Bytes | Range              |
| -------------------------------------------- | ----- | ------------------ |
| `fromUint16`, `fromUint16BE`, `fromUint16LE` | 2     | 0 to 65,535        |
| `fromUint32`, `fromUint32BE`, `fromUint32LE` | 4     | 0 to 4,294,967,295 |
| `fromUint64`, `fromUint64BE`, `fromUint64LE` | 8     | 0 to 2^64-1        |

```ts
import { equals, fromUint16BE, fromUint32BE, fromUint64BE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

assert(equals(fromUint16BE(1000), new Uint8Array([3, 232])));
assert(equals(fromUint32BE(1000), new Uint8Array([0, 0, 3, 232])));
assert(equals(fromUint64BE(1000n), new Uint8Array([0, 0, 0, 0, 0, 0, 3, 232])));
```

#### Fixed-Size Signed Integers

| Function                                  | Bytes | Range             |
| ----------------------------------------- | ----- | ----------------- |
| `fromInt16`, `fromInt16BE`, `fromInt16LE` | 2     | -32,768 to 32,767 |
| `fromInt32`, `fromInt32BE`, `fromInt32LE` | 4     | -2^31 to 2^31-1   |
| `fromInt64`, `fromInt64BE`, `fromInt64LE` | 8     | -2^63 to 2^63-1   |

```ts
import { equals, fromInt16BE, fromInt32BE, fromInt64BE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

assert(equals(fromInt16BE(-1), new Uint8Array([255, 255])));
assert(equals(fromInt32BE(-1), new Uint8Array([255, 255, 255, 255])));
assert(equals(fromInt64BE(-1n), new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255])));
```

#### Variable-Length Integers

For arbitrary-precision integers with optional length specification:

| Function                               | Description                               |
| -------------------------------------- | ----------------------------------------- |
| `fromUint`, `fromUintBE`, `fromUintLE` | Variable-length unsigned                  |
| `fromInt`, `fromIntBE`, `fromIntLE`    | Variable-length signed (two's complement) |

```ts
import { equals, fromIntBE, fromUintBE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

// Automatic length (minimum bytes needed)
assert(equals(fromUintBE(1000), new Uint8Array([3, 232]))); // 2 bytes
assert(equals(fromUintBE(100000), new Uint8Array([1, 134, 160]))); // 3 bytes

// Fixed length
assert(equals(fromUintBE(1000, 4), new Uint8Array([0, 0, 3, 232])));

// Signed integers
assert(equals(fromIntBE(-1), new Uint8Array([255])));
assert(equals(fromIntBE(-129), new Uint8Array([255, 127])));
assert(equals(fromIntBE(128), new Uint8Array([0, 128]))); // needs sign bit
```

---

### Reading Integers from Uint8Array (`get*` functions)

These functions read integers from a Uint8Array at a specified offset.

#### Unsigned Integers

| Function                                           | Bytes | Return Type |
| -------------------------------------------------- | ----- | ----------- |
| `getUint16`, `getUint16BE`, `getUint16LE`          | 2     | `number`    |
| `getUint32`, `getUint32BE`, `getUint32LE`          | 4     | `number`    |
| `getBigUint64`, `getBigUint64BE`, `getBigUint64LE` | 8     | `bigint`    |

```ts
import { getBigUint64BE, getUint16BE, getUint32BE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = new Uint8Array([0, 0, 0, 0, 0, 0, 3, 232]);
assert(getUint16BE(bytes, 6) === 1000);
assert(getUint32BE(bytes, 4) === 1000);
assert(getBigUint64BE(bytes, 0) === 1000n);
```

#### Signed Integers

| Function                                        | Bytes | Return Type |
| ----------------------------------------------- | ----- | ----------- |
| `getInt16`, `getInt16BE`, `getInt16LE`          | 2     | `number`    |
| `getInt32`, `getInt32BE`, `getInt32LE`          | 4     | `number`    |
| `getBigInt64`, `getBigInt64BE`, `getBigInt64LE` | 8     | `bigint`    |

```ts
import { getInt16BE, getInt32BE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = new Uint8Array([0, 0, 3, 232]);
assert(getInt16BE(bytes, 2) === 1000);
assert(getInt32BE(bytes, 0) === 1000);

const negative = new Uint8Array([255, 255, 252, 24]);
assert(getInt16BE(negative, 2) === -1000);
assert(getInt32BE(negative, 0) === -1000);
```

---

### Writing Integers to Uint8Array (`set*` functions)

These functions write integers to a Uint8Array at a specified offset and return the modified array.

#### Unsigned Integers

| Function                                  | Bytes |
| ----------------------------------------- | ----- |
| `setUint16`, `setUint16BE`, `setUint16LE` | 2     |
| `setUint32`, `setUint32BE`, `setUint32LE` | 4     |
| `setUint64`, `setUint64BE`, `setUint64LE` | 8     |

```ts
import { equals, setUint16BE, setUint32BE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = new Uint8Array(8);
setUint16BE(bytes, 0, 1000); // Writes at offset 0
setUint32BE(bytes, 2, 2000); // Writes at offset 2
assert(equals(bytes, new Uint8Array([3, 232, 0, 0, 7, 208, 0, 0])));
```

#### Signed Integers

| Function                               | Bytes |
| -------------------------------------- | ----- |
| `setInt16`, `setInt16BE`, `setInt16LE` | 2     |
| `setInt32`, `setInt32BE`, `setInt32LE` | 4     |
| `setInt64`, `setInt64BE`, `setInt64LE` | 8     |

```ts
import { equals, setInt16BE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = new Uint8Array(4);
setInt16BE(bytes, 0, -1);
assert(equals(bytes, new Uint8Array([255, 255, 0, 0])));
```

---

### Converting Uint8Array to BigInt (`toBig*` functions)

These functions convert entire Uint8Arrays to bigint values. Unlike the `get*` functions which read at a fixed offset,
these convert the whole array.

| Function                                  | Description                                 |
| ----------------------------------------- | ------------------------------------------- |
| `toBigUint`, `toBigUintBE`, `toBigUintLE` | Convert to unsigned bigint                  |
| `toBigInt`, `toBigIntBE`, `toBigIntLE`    | Convert to signed bigint (two's complement) |

```ts
import { toBigIntBE, toBigUintBE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = new Uint8Array([0, 0, 3, 232]);
assert(toBigUintBE(bytes) === 1000n);
assert(toBigIntBE(bytes) === 1000n);

const negative = new Uint8Array([255, 255, 255, 255]);
assert(toBigUintBE(negative) === 4294967295n);
assert(toBigIntBE(negative) === -1n);
```

---

## Endianness

All functions that deal with multi-byte values support both big-endian and little-endian byte orders:

- **Big-Endian (BE)**: Most significant byte first (network byte order)
- **Little-Endian (LE)**: Least significant byte first (x86 native order)

```ts
import { equals, fromUint16BE, fromUint16LE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

// Big-endian: 1000 = 0x03E8 stored as [0x03, 0xE8]
assert(equals(fromUint16BE(1000), new Uint8Array([3, 232])));

// Little-endian: 1000 = 0x03E8 stored as [0xE8, 0x03]
assert(equals(fromUint16LE(1000), new Uint8Array([232, 3])));
```

For functions with a `littleEndian` parameter:

- `false` = big-endian
- `true` = little-endian

## License

MIT

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-uint8array-extension/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-uint8array-extension/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/uint8array-extension.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/uint8array-extension
[jsr-image]: https://jsr.io/badges/@quentinadam/uint8array-extension?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/uint8array-extension
