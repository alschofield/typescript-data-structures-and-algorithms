# Separate-Chaining Hash Table

## How It Works

A fixed ten-bucket table; each collision bucket is a linked chain.

## Required API

Implement HashTable<K, V> with: constructor(hash, equals), set(key, value), get(key), remove(key), contains(key), size, isEmpty. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Keys must not be null; values may be null. set replaces equal keys while retaining the first stored key. Absent/null-key lookups and removals do not mutate. Collisions must work. Never resize.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- set/get/remove/contains expected O(1) with short chains, O(n / 10) as chains grow, O(n) worst case; size/isEmpty O(1); O(entries + 10 buckets).
