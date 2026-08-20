# Heap Sort

## How It Works

Bottom-up build a max heap in the array, then move each root to the shrinking tail.

## Required API

Implement heapSort<T> with: heapSort(items, compare): boolean | void. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Sort in place ascending; stability is not required. Heapify must use bottom-up sift-down, not repeated insertion. Do not use a library heap or built-in sorting.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- best/average/worst O(n log n), O(1) iterative extra space.
