# Breadth-First Search

## How It Works

A FIFO queue visits the source, then each reachable breadth level. Nodes are
marked visited when enqueued, so a node is scheduled at most once.

## Required API

```ts
export function breadthFirstSearch(
  graph: GraphView<any, any>,
  source: any,
  visit: (node: Node<any, any>) => boolean,
): Array<Node<any, any>>;
```

The module default export is `breadthFirstSearch`.

## Contract

Does not mutate the graph. Returns an empty array for an empty graph or missing
source. Otherwise, it includes each dequeued reachable node once in breadth
first order and invokes `visit` after appending that node. A `false` visitor
result stops traversal and returns the partial path, including the stopping
node. Edge weights are ignored. Within a breadth level, order follows the
representation's `neighbors` iteration order. Graph and visitor inputs are not
validated; thrown errors propagate.

## Complexity Targets

O(V + E) time and O(V) auxiliary space for adjacency-list graphs.

## Verification

```sh
bun run test -- src/algorithms/graph-traversal/breadth-first-search/breadth-first-search.test.ts
```
