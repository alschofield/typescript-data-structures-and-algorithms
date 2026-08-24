# Separate-Chaining Hash Table

## How It Works

A hash selects a bucket and each collision bucket is a linked chain. `set`
preserves the chosen fixed capacity; `setResizing` doubles and rehashes buckets
before a new entry would exceed a 0.75 load factor.

## Required API

Implement HashTable<K, V> with: constructor(initialCapacity, hash, equals),
set(key, value), setResizing(key, value), get(key), remove(key), contains(key),
size, capacity, isEmpty. Use idiomatic TypeScript generics and return values;
the required operations remain equivalent to the canonical C curriculum.

## Contract

- `initialCapacity` must be nonzero. Standard callers use `10`; reject an
  invalid capacity without creating a table. Keys must not be null; values may
  be null.
- Both set methods insert a new key or replace an equal key's value while
  retaining the first stored key. `set` never changes capacity.
- `setResizing` checks whether adding a new key would exceed a 0.75 load
  factor. If so, double capacity and rehash every entry with
  `hash(key) % newCapacity` before insertion. A failed growth preserves the
  table, capacity, and result.
- Absent/null-key lookups and removals do not mutate. Collisions must work.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- set/get/remove/contains expected O(1) with short chains, O(n / capacity) as
  fixed chains grow, O(n) worst case; setResizing amortized O(1), O(n) when
  resizing; size/capacity/isEmpty O(1); O(entries + capacity) space.
