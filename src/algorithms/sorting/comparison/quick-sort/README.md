# Quick Sort

## How It Works

Choose the middle value as a pivot, partition into less-than, equal-to, and
greater-than arrays, recursively sort the outer partitions, then copy the
result back to the caller's array.

## Required API

```ts
export function quickSort(
  items: Array<any>,
  compare: (left: any, right: any) => number,
): boolean;
```

The module default export is `quickSort`.

## Contract

Mutates `items` in ascending comparator order and returns `true`, including for
empty and singleton arrays. It preserves the original array object but uses
temporary partition arrays. `compare` is not validated. Duplicates are kept;
the equal partition preserves encounter order, and recursive partitions do as
well, making this implementation stable.

## Complexity Targets

O(n log n) average time, O(n^2) worst-case time, and O(n) auxiliary partition
space plus recursion space.

## Verification

```sh
bun run test -- src/algorithms/sorting/comparison/quick-sort/quick-sort.test.ts
```
