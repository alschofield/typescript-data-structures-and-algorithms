# Insertion Sort

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

Build a sorted prefix one item at a time, shifting each new item left until its
predecessor is no greater according to `compare`.

## Required API

```ts
export function insertionSort(
  items: Array<any>,
  compare: (left: any, right: any) => number,
): boolean;
```

The module default export is `insertionSort`.

## Contract

Sorts `items` ascending in place and returns `true`, including for empty and
singleton arrays. A positive comparator result identifies an inversion. The
function does not validate `compare`; invalid input has ordinary JavaScript
runtime behavior. It retains duplicates and never swaps comparator-equal
values, so its ordering is stable.

## Complexity Targets

O(n) best-case time, O(n^2) average and worst-case time, and O(1) auxiliary
space.

## Verification

```sh
bun run test -- src/algorithms/sorting/comparison/insertion-sort/insertion-sort.test.ts
```
