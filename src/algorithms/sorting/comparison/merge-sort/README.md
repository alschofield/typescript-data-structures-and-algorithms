# Merge Sort

## Public Contract

`mergeSort<T>(items, compare): boolean | void`

- `T` is structural and the comparator defines order.
- The visible tests do not define return meaning, mutation semantics, stability, or allocation behavior.

## Safety And Semantics

- Nullish inputs, comparator failures, comparator result conventions, and equal-item treatment are unverified.
- Any auxiliary sequence must preserve stored reference identity; whether the original container is replaced or mutated must be tested explicitly.
- Split indexes and lengths must be finite integral values within the sequence bounds.

## Complexity And Verification

- The conventional target is O(n log n) time and O(n) auxiliary space.
- Verify empty/singleton, odd and even lengths, duplicates, structural objects, ordering, stability if promised, return meaning, and original-container/reference behavior.
