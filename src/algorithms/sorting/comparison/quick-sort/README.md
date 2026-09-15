# Quick Sort

## Public Contract

`quickSort<T>(items, compare): boolean | void`

- `T` is structural and ordering is comparator-defined.
- The current test contract does not define return meaning, partition policy, stability, or mutation behavior.

## Safety And Semantics

- Nullish inputs, invalid comparators, equal-item order, and handling of duplicate-heavy input are unverified.
- If sorting is in place, preserve the container and stored reference identities; otherwise document the returned container once implemented.
- Partition bounds must remain finite integral indexes and must shrink to guarantee termination.

## Complexity And Verification

- The conventional target is O(n log n) average time, O(n^2) worst case, and logarithmic expected recursion space; the implementation must verify its own pivot strategy.
- Verify empty/singleton, sorted/reverse-sorted, all-equal and duplicate-heavy inputs, structural objects, termination, return meaning, and mutation/reference behavior.
