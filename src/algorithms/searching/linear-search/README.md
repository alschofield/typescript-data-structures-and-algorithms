# Linear Search

## Public Contract

`linearSearch<T>(items, key, compare): number | undefined`

- `T` is structural: callers supply a comparison function rather than requiring a nominal item type.
- The visible test contract does not declare the exact parameter types, comparator result convention, or whether `items` is mutable/readonly.
- `undefined` is the documented not-found result. `null` is not an interchangeable absence value unless the eventual implementation type explicitly permits it.

## Safety And Semantics

- The test scaffold does not specify behavior for `null`, `undefined`, sparse arrays, invalid comparators, or non-finite numeric comparison results; do not promise a behavior until it is implemented and verified.
- Index results must be safe JavaScript array indexes: consumers must not treat `undefined` as an index.
- Reference semantics are unspecified. Tests must verify whether the input sequence and its element references are preserved.

## Complexity And Verification

- Linear search normally examines up to every item: O(n) time and O(1) auxiliary space. Treat this as a target until implementation tests enforce it.
- Verify an empty input, a missing key, a first/middle/last match, duplicate matches, structural objects through `compare`, and input-reference preservation.
