# Counting Sort

## How It Works

Count keys in [0, keyLimit), prefix-sum their positions, and place items in a stable output buffer.

## Required API

Implement countingSort with: countingSort(items, keyLimit): boolean | void. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Use no element comparisons. Validate keys against the declared range. Keep equal keys stable by reverse input placement or equivalent. Do not use built-in sorting.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- best/average/worst O(n + k), O(n + k) auxiliary space.
