# Radix Sort

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

Perform stable counting-sort passes over the four bytes of each unsigned
32-bit integer, from least to most significant byte.

## Required API

```ts
export function radixSort(items: Array<number>): boolean;
```

The module default export is `radixSort`.

## Contract

Accepts only safe integers in the inclusive range `0` through `0xffffffff`.
Any invalid item returns `false` before mutation. Valid arrays, including empty
and singleton arrays, are sorted numerically ascending in place and return
`true`. Duplicates are retained; backward placement in each counting pass makes
the numeric implementation stable, though equal numbers have no observable
identity through this API.

## Complexity Targets

O(n) time and O(n) auxiliary space because the digit count and 256-bucket radix
are fixed.

## Verification

```sh
bun run test -- src/algorithms/sorting/non-comparison/radix-sort/radix-sort.test.ts
```
