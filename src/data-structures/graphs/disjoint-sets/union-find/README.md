# Union-Find

## How It Works

Each element begins as a singleton node. `find` follows parent links and
compresses the discovered path; `union` links roots by rank.

## Required API

```ts
export class UnionFind {
  constructor(capacity: number);
  find(key: number): Node<number, number>;
  union(a: number, b: number): boolean;
  connected(a: number, b: number): boolean;
  setCount(newCapacity: number): boolean;
  size(): number;
}
```

The module default export is `UnionFind`.

## Contract

Construction throws `RangeError` unless capacity is a non-negative safe integer.
`find`, `union`, and `connected` throw `RangeError` for any non-safe-integer,
negative, or out-of-range index. `find` returns the representative node and may
mutate parent links through path compression. `union` returns `true` only when
it joins distinct components; `connected` returns whether representatives
match. `setCount` only grows the universe, returning `false` for invalid or
smaller capacities and `true` otherwise. Elements are indexes, so duplicate
element insertion is not an operation.

## Complexity Targets

Amortized O(alpha(n)) `find`, `union`, and `connected`; O(k) to add `k` elements
with `setCount`; O(n) storage.

## Verification

```sh
bun run test -- src/data-structures/graphs/disjoint-sets/union-find/union-find.test.ts
```
