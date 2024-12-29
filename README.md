# @quentinadam/uint8array-extension

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A library of Uint8Array extension functions.

## Usage

```ts
import Uint8ArrayExtension from '@quentinadam/uint8array-extension';

const a = Uint8ArrayExtension.fromUint32BE(1000);
console.log(a); // Uint8Array [ 0, 0, 3, 232 ]

const b = new Uint8ArrayExtension(a).getUint32BE(0);
console.log(b); // 1000

new Uint8ArrayExtension(a).setUint16BE(0, 1000);
console.log(a); // Uint8Array [ 3, 232, 3, 232 ]

const c = new Uint8ArrayExtension(a).padStart(8);
console.log(c); // Uint8Array [ 0, 0, 0, 0, 3, 232, 3, 232 ]

const d = Uint8ArrayExtension.concat([new Uint8Array([1, 2]), new Uint8Array([3, 4])]);
console.log(d); // Uint8Array [ 1, 2, 3, 4 ]
```

```ts
import concat from '@quentinadam/uint8array-extension/concat';

const a = concat([new Uint8Array([1, 2]), new Uint8Array([3, 4])]);
console.log(a); // Uint8Array [ 1, 2, 3, 4 ]
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-uint8array-extension/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-uint8array-extension/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/uint8array-extension.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/uint8array-extension
[jsr-image]: https://jsr.io/badges/@quentinadam/uint8array-extension?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/uint8array-extension
