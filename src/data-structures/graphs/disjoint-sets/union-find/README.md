# Union-Find

## How It Works

A dense-index disjoint-set forest with parent pointers, path compression, and union by rank or size.

## Required API

Implement UnionFind with: constructor(elementCount), find(element), union(a, b), connected(a, b), setCount. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Each element begins in a singleton set. Reject invalid indexes. Unioning an existing set is a no-op; successful union decreases setCount by one. Representatives may change, so callers rely only on equality.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- find, union, connected amortized O(alpha(n)); construction O(n); O(n) parent and rank/size storage.
