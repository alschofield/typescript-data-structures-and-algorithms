# Dijkstra

## Implementation Status

Implemented and covered by focused behavior tests and a Vitest benchmark.

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
An unreachable vertex has `Infinity` as its distance and no predecessor. The
source distance is zero and the source has no predecessor.

## Contract

`graph` is a dense-index graph whose node keys correspond to indexes in the
result arrays. Return `undefined` for an empty graph or a source for which
`nodeByKey(source)` returns `undefined`. Do not mutate `graph`, its nodes, or
edges.

Finite, non-negative edge weights are relaxed. Negative, `NaN`, and infinite
weights are ignored, so a graph containing one does not invalidate the rest of
the search. Parallel edges, self-loops, cycles, and zero-weight edges are
supported. Equal-cost alternatives do not replace the predecessor chosen by
the first strictly shorter path found.

To reconstruct a source-to-target path, collect the target and each predecessor
until reaching the source, then reverse that separate index array. Do not
reverse the distance or predecessor maps.

## Complexity Targets

With a binary heap, the implementation uses O((V + E) log V) time and O(V)
auxiliary space. Improved distances are pushed as new entries; stale entries
are skipped when popped.

## Verification

```sh
bun run test -- src/algorithms/shortest-paths/dijkstra
bun run bench -- src/algorithms/shortest-paths/dijkstra
```
