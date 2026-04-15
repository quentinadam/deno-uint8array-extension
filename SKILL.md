---
name: uint8array-extension
description: Use when you need to read integer values from byte arrays, write integers to byte arrays, convert between integers and Uint8Arrays, handle big-endian or little-endian byte ordering, concatenate or compare Uint8Arrays, or pad byte arrays.
---

# Uint8Array Extension Library - Agent Skill Guide

This file helps AI code agents understand when and how to use `@quentinadam/uint8array-extension`.

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

## When to Use This Library

Use this library when you need to:

- Read or write integers (16, 32, 64-bit) from/to binary data
- Convert between integers and byte arrays
- Handle big-endian or little-endian byte ordering
- Concatenate, compare, or pad Uint8Arrays
- Work with network protocols, file formats, or binary serialization

## Quick Reference

### Converting Integers to Uint8Array

```ts
import { equals, fromInt32BE, fromUint16BE, fromUint32BE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

assert(equals(fromUint16BE(1000), new Uint8Array([3, 232])));
assert(equals(fromUint32BE(1000), new Uint8Array([0, 0, 3, 232])));
assert(equals(fromInt32BE(-1), new Uint8Array([255, 255, 255, 255])));
```

### Reading Integers from Uint8Array

```ts
import { getUint16BE, getUint32BE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = new Uint8Array([0, 0, 3, 232]);
assert(getUint16BE(bytes, 2) === 1000); // reads 2 bytes at offset 2
assert(getUint32BE(bytes, 0) === 1000); // reads 4 bytes at offset 0
```

### Writing Integers to Uint8Array

```ts
import { equals, setUint16BE, setUint32BE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = new Uint8Array(8);
setUint16BE(bytes, 0, 1000);
setUint32BE(bytes, 4, 2000);
assert(equals(bytes, new Uint8Array([3, 232, 0, 0, 0, 0, 7, 208])));
```

### Array Operations

```ts
import { concat, equals, padEnd, padStart } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const a = new Uint8Array([1, 2]);
const b = new Uint8Array([3, 4]);
assert(equals(concat([a, b]), new Uint8Array([1, 2, 3, 4])));
assert(equals(a, b) === false);
assert(equals(padStart(a, 4), new Uint8Array([0, 0, 1, 2])));
assert(equals(padEnd(a, 4), new Uint8Array([1, 2, 0, 0])));
```

### Converting Uint8Array to BigInt

```ts
import { toBigIntBE, toBigUintBE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = new Uint8Array([0, 0, 3, 232]);
assert(toBigUintBE(bytes) === 1000n); // unsigned
assert(toBigIntBE(bytes) === 1000n); // signed, two's complement
```

## Naming Convention

All functions follow a consistent naming pattern:

- **`from*`**: Convert integer to Uint8Array
- **`get*`**: Read integer from Uint8Array at offset
- **`set*`**: Write integer to Uint8Array at offset
- **`toBig*`**: Convert entire Uint8Array to bigint

Suffixes:

- **`BE`**: Big-endian (network byte order)
- **`LE`**: Little-endian (x86 native order)
- No suffix: Takes `littleEndian: boolean` parameter (`false` = BE, `true` = LE)

## Available Functions

### Unsigned Integers

| Size   | from*          | get*             | set*          |
| ------ | -------------- | ---------------- | ------------- |
| 16-bit | `fromUint16BE` | `getUint16BE`    | `setUint16BE` |
| 32-bit | `fromUint32BE` | `getUint32BE`    | `setUint32BE` |
| 64-bit | `fromUint64BE` | `getBigUint64BE` | `setUint64BE` |

### Signed Integers

| Size   | from*         | get*            | set*         |
| ------ | ------------- | --------------- | ------------ |
| 16-bit | `fromInt16BE` | `getInt16BE`    | `setInt16BE` |
| 32-bit | `fromInt32BE` | `getInt32BE`    | `setInt32BE` |
| 64-bit | `fromInt64BE` | `getBigInt64BE` | `setInt64BE` |

### Variable-Length Integers

- `fromUintBE(value, length?)` - Unsigned, auto or fixed length
- `fromIntBE(value, length?)` - Signed (two's complement)

### Conversion to BigInt

- `toBigUintBE(bytes)` - Unsigned bigint
- `toBigIntBE(bytes)` - Signed bigint (two's complement)

### Array Utilities

- `concat(buffers)` - Concatenate multiple Uint8Arrays into one
- `equals(a, b)` - Compare two Uint8Arrays for byte-by-byte equality
- `padStart(bytes, length)` - Pad array at the start with zero bytes
- `padEnd(bytes, length)` - Pad array at the end with zero bytes
- `getDataView(bytes)` - Create a DataView for the underlying buffer
- `isArrayBufferBacked(bytes)` - Check if backed by ArrayBuffer (not SharedArrayBuffer)

## Import Styles

### 1. Named Exports (Recommended)

Import specific functions directly. Best for tree-shaking.

```ts
import { equals, fromUint32BE, getUint32BE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = fromUint32BE(1000);
assert(getUint32BE(bytes, 0) === 1000);
assert(equals(bytes, new Uint8Array([0, 0, 3, 232])));
```

### 2. Named Export with Static Methods

Use the class directly for static method calls.

```ts
import { Uint8ArrayExtension } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = Uint8ArrayExtension.fromUint32BE(1000);
assert(Uint8ArrayExtension.equals(bytes, new Uint8Array([0, 0, 3, 232])));

const combined = Uint8ArrayExtension.concat([new Uint8Array([1, 2]), new Uint8Array([3, 4])]);
assert(Uint8ArrayExtension.equals(combined, new Uint8Array([1, 2, 3, 4])));
```

### 3. Named Export with Instance Methods

Wrap an existing Uint8Array to use instance methods.

```ts
import { Uint8ArrayExtension } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

const bytes = new Uint8Array([0, 0, 3, 232]);
const ext = new Uint8ArrayExtension(bytes);

assert(ext.getUint32BE(0) === 1000);
assert(ext.toBigUintBE() === 1000n);

ext.setUint16BE(0, 500);
assert(ext.getUint16BE(0) === 500);
```

## Common Patterns

### Parsing a Binary Header

```ts
import { getUint16BE, getUint32BE } from '@quentinadam/uint8array-extension';

function parseHeader(data: Uint8Array) {
  return {
    version: getUint16BE(data, 0),
    length: getUint32BE(data, 2),
    flags: getUint16BE(data, 6),
  };
}
```

### Building a Binary Packet

```ts
import { concat, fromUint16BE, fromUint32BE } from '@quentinadam/uint8array-extension';

function buildPacket(type: number, payload: Uint8Array) {
  return concat([
    fromUint16BE(type),
    fromUint32BE(payload.length),
    payload,
  ]);
}
```

### Working with Variable-Length Integers

```ts
import { equals, fromUintBE } from '@quentinadam/uint8array-extension';
import assert from '@quentinadam/assert';

// Encode with minimum bytes
assert(equals(fromUintBE(255), new Uint8Array([255]))); // 1 byte
assert(equals(fromUintBE(256), new Uint8Array([1, 0]))); // 2 bytes
assert(equals(fromUintBE(65536), new Uint8Array([1, 0, 0]))); // 3 bytes

// Or specify exact length
assert(equals(fromUintBE(255, 4), new Uint8Array([0, 0, 0, 255]))); // 4 bytes
```
