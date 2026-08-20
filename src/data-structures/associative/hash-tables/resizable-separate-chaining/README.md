# Resizable Separate-Chaining Hash Table

## How It Works

A separate-chaining table that doubles and rehashes its bucket array before a new insertion would exceed load factor 0.75.

## Required API

Implement ResizableHashTable<K, V> with: constructor(hash, equals), set(key, value), get(key), remove(key), contains(key), size, capacity, isEmpty. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Start with ten buckets. Keys must not be null; values may be null. Equal-key replacement retains the first key. Rehash every entry after capacity changes. Do not shrink after removals; failed growth leaves state unchanged.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- operations expected amortized O(1), O(n) worst case; rehash O(n) amortized; size/capacity/isEmpty O(1); O(bucket capacity + entries).
