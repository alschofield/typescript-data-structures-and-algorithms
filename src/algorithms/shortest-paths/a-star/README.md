# A-Star

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

A* directs Dijkstra's search toward one goal. For each candidate vertex:

```text
g(vertex) = discovered source-to-vertex cost
h(vertex) = estimated remaining vertex-to-goal cost
f(vertex) = g(vertex) + h(vertex)
```

The frontier expands the lowest `f` score first. Store score snapshots in each
queued candidate and skip stale candidates when a better route is found.

## Required API

```ts
aStar(graph: GraphView, source: number, goal: number, heuristic): number[] | undefined
```

The result is a source-to-goal array of dense vertex indexes, including both
endpoints. `undefined` means the input is invalid or no path exists.

## Contract

`source` and `goal` must be finite integers in `[0, graph.vertexCount)`.
`heuristic(vertex)` must return a finite non-negative number. Edge weights must
also be finite and non-negative. Do not mutate `graph`, its nodes, or edges.

A zero heuristic must behave as Dijkstra and return a lowest-cost path. For
early termination when the goal is popped, the heuristic must be consistent:

```text
h(current) <= edgeWeight(current, neighbor) + h(neighbor)
```

Cycles, parallel edges, self-loops, and zero-weight edges are supported. Record
a predecessor only when a strictly better `g` score is found; reconstruct a
successful path by walking predecessors from goal to source, then reversing a
separate array. Equal-cost ties must be deterministic from neighbor iteration
order.

## Complexity Targets

With a binary heap, target O((V + E) log V) time and O(V) auxiliary space.

## Verification

```sh
bun run test -- src/algorithms/shortest-paths/a-star
```
