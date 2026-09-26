# Separate-Chaining Hash Table

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

Keys map to an array bucket using the supplied hash function. Each bucket is a
collision chain scanned with the supplied equality predicate.

## Required API

```ts
export class HashTable<K, V> {
  constructor(
    capacity: number,
    hash: (key: K | undefined) => number,
    equals: (left: K | undefined, right: K | undefined) => boolean,
  );
  set(key: K, value: V): boolean;
  setResize(key: K, value: V): boolean;
  get(key: K): V | undefined;
  remove(key: K): Node<K, V> | undefined;
  contains(key: K): boolean;
  size(): number;
  capacity(): number;
  isEmpty(): boolean;
}
```

The module default export is `HashTable`.

## Contract

Construction throws `RangeError` unless `capacity` is a positive safe integer.
Negative hash values are normalized to a valid bucket. `set` inserts a distinct
key or replaces an equal key's value without changing size; it returns `true`.
`setResize` has the same key semantics and doubles capacity before a distinct
insertion would exceed load factor `3/4`. `get` and `remove` return `undefined`
when absent; `remove` returns the removed node and decrements size. Chains and
rehashing retain surviving collision order. Hash and equality callbacks are not
validated; callback failures propagate.

## Complexity Targets

Expected O(1) `set`, `get`, `remove`, and `contains`; O(chain length) under
collisions. A resizing insertion is O(n). Storage is O(n + capacity).

## Verification

```sh
bun run test -- src/data-structures/associative/hash-tables/separate-chaining/separate-chaining.test.ts
```
