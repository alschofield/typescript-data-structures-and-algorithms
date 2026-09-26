# Selection Sort

## Public Contract

`selectionSort(items, compare)` sorts `items` in place and returns `true`.

## Safety And Semantics

- The original array and stored object references are retained. Selection swaps
  mean equal comparator values are not guaranteed to retain input order.

## Complexity And Verification

- The conventional target is O(n^2) comparisons, O(1) auxiliary space, and at most n - 1 placement swaps.
- Verify empty/singleton, sorted/reverse-sorted, duplicates, structural objects, return meaning, order, and input/reference mutation behavior.
