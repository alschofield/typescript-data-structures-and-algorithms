# Selection Sort

## How It Works

Repeatedly select the minimum remaining item and swap it into the sorted prefix.

## Required API

Implement selectionSort<T> with: selectionSort(items, compare): boolean | void. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Sort in place ascending with at most n-1 swaps. The classic swap version is not stable. Do not use built-in sorting.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- best/average/worst O(n^2), O(1) extra space.
