# Bubble Sort

## How It Works

Adjacent out-of-order swaps sweep the largest remaining item to the unsorted tail.

## Required API

Implement bubbleSort<T> with: bubbleSort(items, compare): boolean | void. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Sort in place ascending and remain stable by swapping only strictly greater pairs. A zero-swap pass must exit early. Do not use built-in sorting.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- best O(n), average/worst O(n^2), O(1) extra space.
