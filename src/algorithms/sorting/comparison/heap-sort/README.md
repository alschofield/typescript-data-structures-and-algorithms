# Heap Sort

## Public Contract

`heapSort(items, compare)` builds a max heap according to `compare`, sorts
`items` in ascending comparator order in place, and returns `true`.

## Safety And Semantics

- The original array and stored object references are retained. Heap swaps do
  not guarantee stable ordering for equal values.

## Complexity And Verification

- The conventional target is O(n log n) time and O(1) auxiliary space for an iterative in-place implementation.
- Verify empty/singleton, sorted/reverse-sorted, duplicates, structural objects, ordering, return meaning, and mutation/reference behavior.
