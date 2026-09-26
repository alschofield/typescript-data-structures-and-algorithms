# Linear Search

## How It Works

Scan the array from left to right and return immediately when the supplied
equality predicate reports a match.

## Required API

```ts
export function LinearSearch(
  items: Array<any>,
  target: any,
  compare: (left: any, right: any) => boolean,
): any | undefined;
```

The module default export is `LinearSearch`.

## Contract

Does not mutate or reorder `items`. Returns the stored first matching item, not
the target argument, so object-reference identity is retained. Returns
`undefined` for an empty array or absent target. Duplicate matches resolve to
their first occurrence. `compare` is not validated and defines equality; an
invalid predicate follows JavaScript runtime behavior.

## Complexity Targets

O(n) time and O(1) auxiliary space.

## Verification

```sh
bun run test -- src/algorithms/searching/linear-search/linear-search.test.ts
```
