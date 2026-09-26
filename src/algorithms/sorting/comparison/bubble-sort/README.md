# Bubble Sort

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

Repeatedly compare adjacent values and swap inversions. Each completed pass puts
the greatest remaining value at the end; a pass without a swap stops early.

## Required API

```ts
export function bubbleSort(
  items: Array<any>,
  compare: (left: any, right: any) => number,
): boolean;
```

The module default export is `{ bubbleSort }`.

## Contract

Mutates the original `items` array and returns `true`; it does not allocate a
replacement array. A positive comparator result swaps the adjacent pair. Empty
and singleton arrays return `true`. The implementation does not validate
`compare`, so an invalid comparator follows JavaScript's normal runtime
behavior. Equal values are not swapped, making the sort stable; ascending order
follows the comparator, and duplicates are retained.

## Complexity Targets

O(n) best-case time, O(n^2) average and worst-case time, and O(1) auxiliary
space.

## Verification

```sh
bun run test -- src/algorithms/sorting/comparison/bubble-sort/bubble-sort.test.ts
```
