# Dijkstra

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

Dijkstra repeatedly settles the reachable vertex with the smallest tentative
distance, then relaxes each outgoing non-negative weighted edge. A priority
queue may contain stale entries after an improved distance is discovered; skip
them when popped rather than requiring decrease-key support.

## Required API

```ts
dijkstra(graph: GraphView, source: number): DijkstraResult | undefined
```

`DijkstraResult` exposes index-keyed shortest distances and predecessor indexes.
An unreachable vertex has no distance or predecessor. The source distance is
zero and the source has no predecessor.

## Contract

`graph` is a dense-index graph. `source` must be a finite integer in
`[0, graph.vertexCount)`. Return `undefined` for an absent/invalid source or
when the graph cannot be searched. Do not mutate `graph`, its nodes, or edges.

All edge weights must be finite and non-negative. A negative or non-finite
weight invalidates the search rather than producing a partial result. Parallel
edges, self-loops, cycles, and zero-weight edges are supported. When multiple
paths have equal cost, choose a deterministic predecessor based on graph
neighbor iteration order.

To reconstruct a source-to-target path, collect the target and each predecessor
until reaching the source, then reverse that separate index array. Do not
reverse the distance or predecessor maps.

## Complexity Targets

With a binary heap, target O((V + E) log V) time and O(V) auxiliary space.

## Verification

```sh
bun run test -- src/algorithms/shortest-paths/dijkstra
```
