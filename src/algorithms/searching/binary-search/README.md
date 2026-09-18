# Binary Search

## Public Contract

```ts
BinarySearch(
  items: Array<any>,
  target: any,
  compare: (left: any, right: any) => number,
): any | undefined
```

- The comparator returns a negative number when its first value is smaller, a
  positive number when its first value is larger, and zero when values are equal.
- The input must already be sorted in the same ascending order described by the
  comparator. A matching stored item is returned; `undefined` reports absence.

## Safety And Semantics

- The algorithm must not sort or mutate the input. Object matches return the
  original stored reference, not the target object supplied to the comparator.
- Duplicate-match selection is unspecified; any matching duplicate is valid.
- Nullish inputs and malformed comparator behavior remain unverified.

## Complexity Targets

- For sorted random-access input, O(log n) time and O(1) auxiliary space.

## Verification

```sh
npm test -- src/algorithms/searching/binary-search/binary-search.test.ts
npm run bench -- src/algorithms/searching/binary-search/binary-search.bench.ts
```

Tests cover empty and missing input, boundary and middle matches, duplicates,
structural comparison, input preservation, and returned reference identity.
Benchmarks compare first, middle, last, and missing targets over 1,024 sorted
items.
