# Insertion Sort

## Public Contract

`insertionSort(items, compare)` sorts `items` in place, returns `true`, and
uses the comparator's numeric ordering.

## Safety And Semantics

- The original array and stored object references are retained. Equal elements
  are not swapped, so this implementation is stable.

## Complexity And Verification

- The conventional target is O(n) best case, O(n^2) average/worst case, and O(1) auxiliary space.
- Verify empty/singleton, nearly sorted and reverse-sorted inputs, duplicates, structural objects, ordering, stability if promised, return meaning, and reference behavior.
