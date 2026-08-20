# Depth-First Search

## How It Works

Traverse as far as possible down each branch before backtracking, using a stack or recursion.

## Required API

Implement depthFirstSearch with: depthFirstSearch(graph, source): number[] | undefined. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Visit each reachable vertex once using a visited set, leave graph unchanged, reject invalid source, and handle cycles, self-loops, and disconnected graphs. Understand both recursive and explicit-stack forms; do not use a library stack.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- O(V + E) time and O(V) auxiliary space.
