# Adjacency List

## How It Works

Nodes live in a registry and each node owns an insertion-ordered array of
outgoing edges. Undirected graphs store reciprocal edges while counting one
logical edge.

## Required API

```ts
export class AdjacencyList<K, V> {
  constructor(directed: boolean, compare: (left: K | V | undefined, right: K | V | undefined) => number);
  nodeByKey(key: K): Node<K, V> | undefined;
  addNode(key: K, value: V): boolean;
  addEdge(from: K, to: K, weight: number): boolean;
  neighbors(key: K, visit: (node: Node<K, V> | undefined) => boolean): boolean;
  neighbors(node: Node<K, V>): Iterable<Edge<K, V>>;
  edgeCount(): number;
  nodeCount(): number;
  directed(): boolean;
  isEmpty(): boolean;
}
```

The module default export is `AdjacencyList`.

## Contract

`addNode` returns `true`; a duplicate key does not create a node and increments
that node's `occurrences`. New nodes receive dense insertion indexes. `addEdge`
returns `false` for a missing endpoint or duplicate outgoing destination and
otherwise adds the supplied weight. The key-and-callback `neighbors` returns
`false` only for visitor-requested early stop; a missing key returns `true`.
The node overload yields its edge array or an empty iterable. Edge and neighbor
order follow insertion order; callbacks and keys are not otherwise validated.

## Complexity Targets

O(V + E) storage; O(V) key lookup, O(deg(v)) neighbor iteration and duplicate
edge check, and O(1) edge-count access.

## Verification

```sh
bun run test -- src/data-structures/graphs/representations/adjacency-list/adjacency-list.test.ts
```
