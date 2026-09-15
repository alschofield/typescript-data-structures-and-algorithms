# Bubble Sort

## Public Contract

`bubbleSort<T>(items, compare): boolean | void`

- `T` is structural and ordering is comparator-defined.
- The `boolean | void` result is the only visible return contract; its meaning is not yet specified.
- The test scaffold does not state whether sorting is in place or returns another sequence.

## Safety And Semantics

- Nullish inputs, comparator failures, comparator result conventions, stability, and the treatment of equal elements are unverified.
- If the implementation mutates `items`, it must retain the sequence container and the stored object references; tests must state and verify that decision.
- Do not use a boolean result as an array or numeric value without an explicit implementation contract.

## Complexity And Verification

- The conventional target is O(n^2) time, O(1) auxiliary space, and O(n) best case only with an early-exit pass.
- Verify empty/singleton input, already sorted and reverse-sorted input, duplicates and structural objects, output ordering, stability if promised, return meaning, and mutation/reference semantics.
