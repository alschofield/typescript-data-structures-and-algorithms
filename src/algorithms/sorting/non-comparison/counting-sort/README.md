# Counting Sort

## How It Works

Count each admissible integer in a `limit`-sized frequency array, emit values in
ascending numeric order, and copy them back into the input array.

## Required API

```ts
export function countingSort(items: Array<number>, limit: number): boolean;
```

The module default export is `{ countingSort }`.

## Contract

Accepts only a non-negative safe-integer `limit` and non-negative safe-integer
items satisfying `item < limit`. Invalid `limit` or item values return `false`
without mutation. Valid inputs, including empty and singleton arrays, sort
numerically ascending in place and return `true`. Equal numeric values are
indistinguishable; all duplicate counts are retained. This API does not accept
records, so it provides no observable stability guarantee.

## Complexity Targets

O(n + limit) time and O(n + limit) auxiliary space.

## Verification

```sh
bun run test -- src/algorithms/sorting/non-comparison/counting-sort/counting-sort.test.ts
```
