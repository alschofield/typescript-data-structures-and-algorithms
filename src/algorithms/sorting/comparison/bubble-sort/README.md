# Bubble Sort

## Public Contract

`bubbleSort(items, compare)` sorts `items` in place, returns `true`, and treats
a positive comparator result as an out-of-order adjacent pair.

## Safety And Semantics

- The original array and stored object references are retained. Equal elements
  are not swapped, so this implementation is stable.

## Complexity And Verification

- The conventional target is O(n^2) time, O(1) auxiliary space, and O(n) best case only with an early-exit pass.
- Verify empty/singleton input, already sorted and reverse-sorted input, duplicates and structural objects, output ordering, stability if promised, return meaning, and mutation/reference semantics.
