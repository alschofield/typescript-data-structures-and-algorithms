# Stack

## How It Works

An array-backed LIFO collection whose top is the final occupied index.

## Required API

Implement Stack<T> with: push(item), pop(), peek(), size, isEmpty. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- pop and peek return the most recently pushed item; pop removes it. Empty operations report absence without mutation. Stored values remain caller-owned.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- push amortized O(1); pop, peek, size, isEmpty O(1); O(n) contiguous space.
