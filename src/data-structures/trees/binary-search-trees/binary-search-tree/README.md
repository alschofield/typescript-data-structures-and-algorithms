# Binary Search Tree

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

Comparator-smaller values are linked left and larger values right. In-order
traversal visits structural nodes in ascending comparator order.

## Required API

```ts
export class BinarySearchTree<V> {
  constructor(compare: (left: V | undefined, right: V | undefined) => number);
  insert(value: V): boolean;
  _find(value: V): { target: Node<number, V> | undefined; child_direction: string | undefined; parent: Node<number, V> | undefined };
  find(value: V): Node<number, V> | undefined;
  contains(value: V): boolean;
  remove(value: V): boolean;
  inOrder(visit: (node: Node<number, V> | undefined) => boolean): boolean;
  size(): number;
  isEmpty(): boolean;
  directed(): boolean;
  nodeCount(): number;
  nodeByKey(key: number): Node<number, V> | undefined;
  neighbors(node: Node<number, V>): Iterable<Edge<number, V>>;
}
```

The module default export is `BinarySearchTree`.

## Contract

`insert` returns `true`; a distinct value becomes a structural node with a
monotonically assigned key, while a comparator-equal value increments the
retained node's `occurrences`. `find` returns `undefined` when absent, and
`remove` returns `false` without mutation when absent; removal deletes the
structural node regardless of occurrences. `inOrder` stops and returns `false`
when its visitor does. The graph view is directed: `neighbors` yields left then
right child edges at weight `1`; `nodeByKey` returns `undefined` if absent.
Comparator and visitor inputs are not validated.

## Complexity Targets

O(log n) core operations for balanced shape and O(n) worst case; O(n)
`nodeByKey` and in-order traversal; O(n) storage.

## Verification

```sh
bun run test -- src/data-structures/trees/binary-search-trees/binary-search-tree/binary-search-tree.test.ts
```
