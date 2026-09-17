# GraphView

## Public Contract

```ts
interface GraphView<K, V> {
  directed(): boolean
  nodeCount(): number
  nodeByKey(key: K): Node<K, V> | undefined
  neighbors(node: Node<K, V>): Iterable<Edge<K, V>>
}

interface UndirectedEdgeGraphView<K, V> extends GraphView<K, V> {
  edges(): Iterable<Edge<K, V>>
}

type Node<K, V> = {
  key: K
  value: V
  occurrences: number
  isEndOfWord: boolean
  rank: number
  next?: Node<K, V>
  prev?: Node<K, V>
  left?: Node<K, V>
  right?: Node<K, V>
  parent?: Node<K, V>
  children: Node<K, V>[]
  edges: Edge<K, V>[]
}

type Edge<K, V> = {
  from: Node<K, V>
  to: Node<K, V>
  weight: number
}
```

`GraphView` is structural: adjacency-list, adjacency-matrix, and imported-graph
objects need no shared base class, only this method shape.

- `Node<K, V>` is the shared mutable node shape: its links serve linked lists,
  trees, tries, union-find, and graph representations; `edges` supplies the
  adjacency-list graph view.
- Graph nodes use stable numeric keys. `nodeByKey` returns `undefined` when a
  key is absent. `Edge<T>` preserves endpoint values and its weight.
- `neighbors` returns full edges rather than representation-specific handles or
  raw numeric records, so graph algorithms can retain nodes and reconstruct
  useful paths directly.

## Safety And Semantics

- The current interface does not itself validate indexes, weights, nullish inputs,
  or mutation timing; representation adapters define those runtime behaviors.
- `UndirectedEdgeGraphView.edges()` returns each logical undirected edge once;
  `neighbors` may still expose both directions for traversal.

## Complexity Targets

- Complexity is representation-dependent: adjacency-list iteration is conventionally O(deg(v)); matrix iteration is O(V). `nodeByKey` complexity depends on the representation's key index.

## Verification

```sh
npm test -- src/data-structures/graphs/graph-view/graph-view.test.ts
```

Tests cover structural graph assignment, node lookup, deterministic weighted
edge iteration, and an isolated node. Representation-specific adapter
equivalence is covered when adjacency-list and adjacency-matrix implementations
exist.
