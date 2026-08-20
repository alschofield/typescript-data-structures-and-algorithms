# Linear Search

## How It Works

A front-to-back scan over arbitrary input.

## Required API

Implement linearSearch<T> with: linearSearch(items, key, compare): number | undefined. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Works on unsorted input and returns the first matching index. Missing and empty inputs return undefined. Never modify input and do not use Array.prototype.indexOf/find.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- best O(1), average/worst O(n), O(1) extra space.
