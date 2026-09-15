# Counting Sort

## Public Contract

`countingSort(items, keyLimit): boolean | void`

- The element type and interpretation of `keyLimit` are not declared by the visible test contract.
- The `boolean | void` result has no specified meaning, and in-place versus copied output is unverified.

## Safety And Semantics

- Number safety is essential: keys and `keyLimit` need explicit finite-integer/range rules before they can index a count array.
- Nullish inputs, invalid keys, negative values, overflow-sized allocations, stability, and reference/mutation semantics are not specified yet.
- Do not claim a key extractor, range convention, or error behavior that is absent from code/tests.

## Complexity And Verification

- Once a finite key range is specified, the conventional target is O(n + k) time and O(n + k) auxiliary space.
- Verify empty input, boundary keys, invalid numeric inputs, duplicates and stability if promised, return meaning, and container/reference behavior.
