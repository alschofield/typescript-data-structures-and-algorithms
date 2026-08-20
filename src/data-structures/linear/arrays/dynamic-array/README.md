# Dynamic Array

## How It Works

A resizable contiguous collection. Keep logical size separate from allocated capacity and grow geometrically.

## Required API

Implement DynamicArray<T> with: create(), get(index), set(index, item), insert(index, item), remove(index), size, capacity, isEmpty. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Indexes are [0, size); insert also accepts size. get/set/remove reject invalid indexes without mutation. set and remove return the prior item. Stored values remain caller-owned.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- get, set, size, capacity, isEmpty O(1); append amortized O(1); indexed insert/remove O(n); O(n) contiguous space.
