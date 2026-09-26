# Binary Search

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

Repeatedly compare the target to the midpoint of an already sorted inclusive
range, discarding the half that cannot contain a comparator-equal value.

## Required API

```ts
export function BinarySearch(
  items: Array<any>,
  target: any,
  compare: (left: any, right: any) => number,
): any | undefined;
```

The module default export is `BinarySearch`.

## Contract

Does not mutate or sort `items`; callers must provide an array ordered by the
same ascending comparator. Returns a stored matching item or `undefined` when
the range is empty or no match is found. With duplicates, it returns an
unspecified matching occurrence, not necessarily the first or last. The
comparator is not validated, and incorrect ordering or comparator behavior
produces no defined search result.

## Complexity Targets

O(log n) time and O(1) auxiliary space.

## Verification

```sh
bun run test -- src/algorithms/searching/binary-search/binary-search.test.ts
```
