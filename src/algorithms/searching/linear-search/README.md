# Linear Search

## Public Contract

```ts
LinearSearch(
  items: Array<any>,
  target: any,
  compare: (left: any, right: any) => boolean,
): any | undefined
```

- Callers supply a boolean comparison function rather than relying on a built-in ordering rule.
- The first matching item is returned; `undefined` reports ordinary not-found absence.

## Safety And Semantics

- The input array is scanned in order and is never mutated.
- Object matches return the original stored reference, not the target object supplied to the comparator.
- `undefined` can be ambiguous if it is a valid stored item value; callers that need presence distinct from value should use an index-returning API instead.

## Complexity Targets

- Best O(1), average and worst O(n) time, and O(1) auxiliary space.

## Verification

```sh
npm test -- src/algorithms/searching/linear-search/linear-search.test.ts
npm run bench -- src/algorithms/searching/linear-search/linear-search.bench.ts
```

Tests cover unsorted input, duplicates, missing and empty input, structural
comparison, input preservation, and returned reference identity. Benchmarks
contrast first, middle, last, and missing matches.
