# Kruskal Minimum Spanning Forest

## Implementation Status

Implemented and verified with behavioral tests and a 1,000-node benchmark.

## How It Works

Kruskal sorts every logical undirected weighted edge from lowest to highest.
Union-find tracks connected components. Accept an edge only when its endpoints
are in different components, then union those components; skip edges that would
create a cycle.

## Required API

```ts
kruskal(graph: UndirectedEdgeGraphView<number, any>): Array<Edge<number, any>> | undefined
```

The result is a minimum spanning tree for a connected graph or a minimum
spanning forest for a disconnected graph.

## Contract

The graph must be undirected and expose each logical weighted edge once. Edge
weights must be finite; negative weights are valid for Kruskal. Do not mutate
the graph. Return `undefined` for an invalid graph; otherwise return accepted
edges in ascending processing order. Self-loops are ignored. Parallel edges are
supported, and the cheapest usable edge is considered first after sorting.

## Complexity Targets

Sorting dominates: O(E log E) time. Union-find operations are near constant
amortized time with path compression and union by rank. Auxiliary space is
O(V + E).

## Verification

```sh
bun run test -- src/algorithms/minimum-spanning-trees/kruskal
```
