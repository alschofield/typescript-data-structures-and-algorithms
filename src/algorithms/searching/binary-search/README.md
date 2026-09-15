# Binary Search

## Public Contract

`binarySearch<T>(items, key, compare): number | undefined`

- `T` is structural: ordering comes from the caller-provided comparator.
- The visible test contract does not specify comparator conventions, sorting preconditions, or mutability.
- `undefined` is the documented not-found result; `null` is not a substitute unless an implemented type says so.

## Safety And Semantics

- Whether the input must already be sorted, and in which order, is not yet specified by code or tests. The function must not silently document a sort operation.
- Midpoint and bounds arithmetic must remain finite, integral, and inside the array range.
- Nullish inputs, malformed comparators, duplicate-match selection, and reference/mutation behavior remain unverified.

## Complexity And Verification

- For sorted random-access input, the expected target is O(log n) time and O(1) auxiliary space.
- Verify empty and missing input, boundary matches, duplicates, structural objects, safe termination, and preservation of the input reference and order.
