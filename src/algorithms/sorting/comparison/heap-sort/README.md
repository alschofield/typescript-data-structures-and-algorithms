# Heap Sort

## Public Contract

`heapSort<T>(items, compare): boolean | void`

- `T` is structural and ordering is comparator-defined.
- The visible test contract does not define result meaning, sort direction, stability, or mutation behavior.

## Safety And Semantics

- Nullish inputs, comparator failures, equal-item order, and container/reference semantics are unverified.
- Heap child/parent calculations must use finite integral indexes and never read beyond the active heap.
- Do not claim a library heap, heap construction strategy, or returned value without implementation evidence.

## Complexity And Verification

- The conventional target is O(n log n) time and O(1) auxiliary space for an iterative in-place implementation.
- Verify empty/singleton, sorted/reverse-sorted, duplicates, structural objects, ordering, return meaning, and mutation/reference behavior.
