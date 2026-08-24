# GraphView

## Required API

Implement `GraphView` with `vertexCount` and `neighbors(vertex: number): Iterable<{ vertex: number, weight: number }>`.

## Contract

- Vertexes are dense indexes in `[0, vertexCount)`. Neighbor iteration rejects an out-of-range index, yields each outgoing weighted edge once in deterministic order, and does not mutate the backing graph.
- Weights are nonnegative. Adjacency-list, adjacency-matrix, and imported-graph adapters map their storage to vertex indexes. GraphView never exposes node handles or values.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- `vertexCount` is O(1). Neighbor iteration is O(deg(u)) for an adjacency list and O(N) for an adjacency matrix.
