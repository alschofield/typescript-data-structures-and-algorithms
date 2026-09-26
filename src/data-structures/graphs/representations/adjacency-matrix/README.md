# Adjacency Matrix

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

A square matrix stores an edge or `undefined` at each pair of dense node
indexes. A separate registry resolves potentially sparse numeric keys.

## Required API

```ts
export class AdjacencyMatrix<V> {
  constructor(directed: boolean, compare: (left: number | V | undefined, right: number | V | undefined) => number);
  nodeAtKey(key: number): Node<number, V> | undefined;
  nodeByKey(key: number): Node<number, V> | undefined;
  addNode(key: number, value: V): boolean;
  addEdge(from: number, to: number, weight: number): boolean;
  neighbors(key: number, visit: (node: Node<number, V>) => boolean): boolean;
  neighbors(node: Node<number, V>): Iterable<Edge<number, V>>;
  nodeCount(): number;
  edgeCount(): number;
  directed(): boolean;
  isEmpty(): boolean;
}
```

The module default export is `AdjacencyMatrix`.

## Contract

`addNode` returns `true`; a duplicate key increments the retained node's
`occurrences` instead of adding a row or column. `addEdge` returns `false` for
missing endpoints or an already populated directed matrix cell. An undirected
edge occupies both cells but increments `edgeCount` once. Callback neighbors
scan ascending matrix-index order, returning `false` only for early stop; a
missing key returns `true`. Node-overload neighbors yields populated row cells
in index order. Callback failures and invalid callback values are not handled.

## Complexity Targets

O(V^2) storage; O(V) key lookup and neighbor scan; O(V) node insertion because
the matrix grows each row; O(1) edge insertion after key resolution.

## Verification

```sh
bun run test -- src/data-structures/graphs/representations/adjacency-matrix/adjacency-matrix.test.ts
```
