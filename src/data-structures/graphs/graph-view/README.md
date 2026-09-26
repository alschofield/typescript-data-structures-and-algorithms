# Graph View

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

`GraphView` is the shared read-only graph boundary used by traversal algorithms.
Representations expose nodes by key and outgoing weighted edges by node.

## Required API

```ts
export interface GraphView<K, V> {
  directed(): boolean;
  nodeCount(): number;
  nodeByKey(key: K): Node<K, V> | undefined;
  neighbors(node: Node<K, V>): Iterable<Edge<K, V>>;
}

export interface UndirectedEdgeGraphView<K, V> extends GraphView<K, V> {
  edges(): Iterable<Edge<K, V>>;
}

export type Node<K, V> = { key?: K; value: V; index?: number; occurrences?: number; isEndOfWord?: boolean; rank?: number; next?: Node<K, V>; prev?: Node<K, V>; left?: Node<K, V>; right?: Node<K, V>; parent?: Node<K, V>; children?: Array<Node<K, V>> | Map<K, Node<K, V> | undefined>; edges?: Array<Edge<K, V>> };
export type Edge<K, V> = { from: Node<K, V>; to: Node<K, V>; weight: number };
```

The module default export is `GraphView`.

## Contract

`nodeByKey` returns `undefined` for an absent key. `neighbors` returns outgoing
edges in the representation's order and does not define mutation, validation,
or error signaling beyond normal JavaScript behavior. Node fields are shared
across graph, list, tree, trie, and union-find leaves; each structure uses only
its applicable fields. The interfaces impose no duplicate, ordering, or
complexity policy beyond each concrete representation's contract.

## Complexity Targets

The interfaces impose no operation or storage bounds.

## Verification

```sh
bun run test -- src/data-structures/graphs/graph-view/graph-view.test.ts
```
