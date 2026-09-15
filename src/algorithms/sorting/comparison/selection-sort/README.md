# Selection Sort

## Public Contract

`selectionSort<T>(items, compare): boolean | void`

- `T` is structural and ordering is comparator-defined.
- The visible contract does not define the boolean result or whether the sequence is mutated.

## Safety And Semantics

- Nullish inputs, comparator failures, comparator result conventions, and equal-item ordering are not specified by the current code/tests.
- Mutation and reference identity must be explicitly tested. Do not claim stability unless the implemented swap policy proves it.
- Numeric loop indexes must remain integral and within `[0, items.length]`.

## Complexity And Verification

- The conventional target is O(n^2) comparisons, O(1) auxiliary space, and at most n - 1 placement swaps.
- Verify empty/singleton, sorted/reverse-sorted, duplicates, structural objects, return meaning, order, and input/reference mutation behavior.
