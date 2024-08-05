# uint8array-extension

[![JSR](https://jsr.io/badges/@quentinadam/uint8array-extension)](https://jsr.io/@quentinadam/uint8array-extension)
[![CI](https://github.com/quentinadam/deno-uint8array-extension/actions/workflows/ci.yml/badge.svg)](https://github.com/quentinadam/deno-uint8array-extension/actions/workflows/ci.yml)

A library for working with arbitrary precision uint8array-extension numbers. Decimal numbers are represented by a
mantissa (bigint) and an exponent (number). Instances of the Decimal class are immutable; calling functions (like `abs`,
`add`, `ceil`, ...) on an instance will return a new Decimal instance with the result. Division may fail if the
resulting number cannot be represented with a fixed number of decimals (like 1/3). Please check the documentation of the
`div` function for more details.

## Usage

```ts
import Decimal from '@quentinadam/uint8array-extension';

const a = Decimal.from('1.11111111111111111111');

const b = a.mul(2);

console.log(b.toString()); // prints 2.22222222222222222222

const c = a.add(b);

console.log(c.toString()); // prints 3.33333333333333333333
```
