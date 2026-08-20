# Queue

## How It Works

A FIFO ring buffer with wrapping head and tail indexes, so dequeues never shift elements.

## Required API

Implement Queue<T> with: enqueue(item), dequeue(), peek(), size, isEmpty. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- dequeue and peek return the oldest item; dequeue removes it. Empty operations report absence without mutation. Stored values remain caller-owned.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- enqueue amortized O(1); dequeue, peek, size, isEmpty O(1); O(n) contiguous space.
