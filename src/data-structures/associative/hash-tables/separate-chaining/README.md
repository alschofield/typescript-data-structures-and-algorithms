# Separate-Chaining Hash Table

## Public Contract

`HashTable<K, V>` exposes `constructor(initialCapacity, hash, equals)`, `set`, `setResizing`, `get`, `remove`, `contains`, `size`, `capacity`, and `isEmpty`.

- `K` and `V` are structural. Equality and hashing are caller-defined, so equal keys must have compatible hashes.
- Tests require zero capacity rejection, fixed capacity for `set`, and resize/rehash before `setResizing` would exceed a 0.75 load factor.

## Safety And Semantics

- `initialCapacity` must be a positive finite integer. A hash result must be normalized to a finite bucket index; negative, fractional, `NaN`, and infinite results need explicit handling.
- The visible test establishes zero capacity but not key/value nullability. Implementation tests must define actual TypeScript nullability and error behavior.
- `set`/`setResizing` mutate stored associations. Verify replacement semantics, retained key/value references, collision behavior, failure atomicity, and whether `get`/`remove` distinguish an absent key from a stored `undefined` value.

## Complexity And Verification

- Expected operations are conventionally O(1) with a well-distributed hash; collisions and resize rehashing can make an operation O(n). Storage is O(entries + capacity).
- Verify invalid capacity/hash outputs, collisions, structural equal keys, `null`/`undefined` handling as typed, replacement, fixed versus resizing capacity, 0.75 threshold, rehash preservation, and reference semantics.
