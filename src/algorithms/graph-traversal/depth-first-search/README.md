# Depth-First Search

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

A LIFO stack follows one branch before backtracking. Neighbor edges are pushed
in reverse iteration order so their normal representation order is popped first.

## Required API

```ts
export function depthFirstSearch(
  graph: GraphView<any, any>,
  source: any,
  visit: (node: Node<any, any>) => boolean,
): Array<Node<any, any>>;
```

The module default export is `depthFirstSearch`.

## Contract

Does not mutate the graph. It returns an empty array for an empty graph or
missing source. Otherwise, it appends and visits each reachable node at most
once in iterative depth-first order. A `false` visitor result stops after the
current node was appended and returns the partial path. Edge weights are
ignored. Sibling order follows `neighbors` iteration order, subject to nodes
being marked when pushed. Inputs are not validated; thrown graph or visitor
errors propagate.

## Complexity Targets

O(V + E) time and O(V) auxiliary space for adjacency-list graphs.

## Verification

```sh
bun run test -- src/algorithms/graph-traversal/depth-first-search/depth-first-search.test.ts
```
