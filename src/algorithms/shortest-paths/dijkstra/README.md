# Dijkstra

## How It Works

Repeatedly settle the lowest tentative distance and relax its non-negative weighted outgoing edges.

## Required API

Implement dijkstra with: dijkstra(graph, source): { distances, parents } | undefined. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Reject negative weights and invalid sources. Unreachable vertices use explicit infinity. Parent links reconstruct shortest paths. Support cycles, parallel edges, and self-loops. Do not use a library priority queue.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- O((V + E) log V) time with a binary heap and O(V) auxiliary space.
