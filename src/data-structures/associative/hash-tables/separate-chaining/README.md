# Separate-Chaining Hash Table

## Public Contract

`HashTable<K, V>` exposes `constructor(initialCapacity, hash, equals)`, `set`, `setResize`, `get`, `remove`, `contains`, `size`, `capacity`, and `isEmpty`.

- `K` and `V` are structural. Equality and hashing are caller-defined, so equal keys must have compatible hashes.
- Tests require zero capacity rejection, fixed capacity for `set`, and resize/rehash before `setResize` would exceed a 0.75 load factor.

## Safety And Semantics

- `initialCapacity` must be a positive safe integer or construction throws `RangeError`. The hash callback is required to return a whole safe integer; negative integers are normalized to valid indexes. Fractional, `NaN`, and infinite hash outputs violate the caller contract and are not normalized by the table.
- `get` returns `V | undefined`; `contains` checks bucket membership directly so a stored `undefined` value remains distinguishable from an absent key.
- `set`/`setResize` mutate stored associations. Verify replacement semantics, retained key/value references, collision behavior, failure atomicity, and whether `get`/`remove` distinguish an absent key from a stored `undefined` value.

## Complexity Targets

- Expected operations are conventionally O(1) with a well-distributed hash; collisions and resize rehashing can make an operation O(n). Storage is O(entries + capacity).

## Verification

```sh
npm test -- src/data-structures/associative/hash-tables/separate-chaining/separate-chaining.test.ts
npm run bench -- src/data-structures/associative/hash-tables/separate-chaining/separate-chaining.bench.ts
```

Tests cover collisions, replacement, removal, negative hashes, capacity guards,
fixed-capacity `set`, and resize/rehash behavior. The
benchmark contrasts well-distributed insertion, collision-chain lookup, and
resize work.
