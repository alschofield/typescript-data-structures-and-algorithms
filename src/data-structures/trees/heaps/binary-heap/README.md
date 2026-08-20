# Binary Heap

## How It Works

An array-backed complete tree with children at 2i+1 and 2i+2, maintaining the caller-defined minimum at the root.

## Required API

Implement BinaryHeap<T> with: constructor(compare), push(item), pop(), peek(), size, isEmpty. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- push appends then sifts up; pop removes the extreme then sifts down. Empty pop/peek report absence without mutation. Equal priorities have no guaranteed order. Use geometric growth and do not use a library priority queue.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- push/pop O(log n), push amortized including growth; peek/size/isEmpty O(1); bottom-up heapify O(n); O(n) contiguous space.
