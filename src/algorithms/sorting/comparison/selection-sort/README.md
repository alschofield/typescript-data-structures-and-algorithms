# Selection Sort

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

For each position, scan the remaining suffix for its smallest value and swap it
into the next slot of the sorted prefix.

## Required API

```ts
export function selectionSort(
  items: Array<any>,
  compare: (left: any, right: any) => number,
): boolean;
```

The module default export is `selectionSort`.

## Contract

Sorts the caller's `items` array in ascending comparator order and returns
`true`, including for empty and singleton arrays. A positive comparator result
selects a smaller candidate. There is no comparator validation. Duplicates are
retained, but swapping a selected value can reorder comparator-equal values, so
the algorithm is not stable.

## Complexity Targets

O(n^2) time in every case and O(1) auxiliary space.

## Verification

```sh
bun run test -- src/algorithms/sorting/comparison/selection-sort/selection-sort.test.ts
```
