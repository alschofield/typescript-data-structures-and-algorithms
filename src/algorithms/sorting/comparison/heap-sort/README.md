# Heap Sort

## How It Works

Build a max heap in `items`, then repeatedly exchange its root with the final
unsorted slot and sift the new root down.

## Required API

```ts
export function heapSort(
  items: Array<any>,
  compare: (left: any, right: any) => number,
): boolean;
```

The module default export is `{ heapSort }`.

## Contract

Sorts `items` ascending in place and returns `true`, including for empty and
singleton arrays. A positive comparator result denotes the greater value. No
comparator validation is performed. Duplicates are retained, but heap exchanges
may reorder comparator-equal values, so order is not stable.

## Complexity Targets

O(n log n) time and O(1) auxiliary space.

## Verification

```sh
bun run test -- src/algorithms/sorting/comparison/heap-sort/heap-sort.test.ts
```
