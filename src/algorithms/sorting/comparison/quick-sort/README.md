# Quick Sort

## Public Contract

`quickSort(items, compare)` sorts `items` in place and returns `true` after
partitioning around each midpoint pivot into less-than, equal, and greater-than
arrays.

## Safety And Semantics

- The original array and stored object references are retained. Equal values are
  collected in encounter order, including duplicate-heavy inputs.

## Complexity And Verification

- The conventional target is O(n log n) average time, O(n^2) worst case, and logarithmic expected recursion space; the implementation must verify its own pivot strategy.
- Verify empty/singleton, sorted/reverse-sorted, all-equal and duplicate-heavy inputs, structural objects, termination, return meaning, and mutation/reference behavior.
