# Insertion Sort

## Public Contract

`insertionSort<T>(items, compare): boolean | void`

- `T` is structural and the comparator defines order.
- The current tests specify neither the boolean result's meaning nor in-place versus copied output.

## Safety And Semantics

- Nullish inputs, comparator failures, comparator result conventions, and equal-item behavior are unverified.
- Reference and container mutation semantics must be determined from implementation and tests, not inferred from the algorithm name.
- Index arithmetic must stay integral and bounded while shifting elements.

## Complexity And Verification

- The conventional target is O(n) best case, O(n^2) average/worst case, and O(1) auxiliary space.
- Verify empty/singleton, nearly sorted and reverse-sorted inputs, duplicates, structural objects, ordering, stability if promised, return meaning, and reference behavior.
