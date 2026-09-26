# Merge Sort

## How It Works

Recursively sort copied left and right halves, then merge them. On equality the
merge takes from the left half first.

## Required API

```ts
export function mergeSort(
  items: Array<any>,
  compare: (left: any, right: any) => number,
): boolean;
```

The module default export is `mergeSort`.

## Contract

Sorts `items` ascending in place with `splice` and returns `true`, preserving
the array identity. Empty and singleton arrays return `true`. `compare` is not
validated. Duplicates are retained and equal values take the left merge branch,
so the result is stable.

## Complexity Targets

O(n log n) time, O(n) merge storage, and O(log n) recursion space.

## Verification

```sh
bun run test -- src/algorithms/sorting/comparison/merge-sort/merge-sort.test.ts
```
