# Binary Search Tree

## Public Contract

```ts
class BinarySearchTree<T> {
  constructor(compare: (left: T | undefined, right: T | undefined) => number)
  insert(value: T): boolean
  find(value: T): Node<number, T> | undefined
  contains(value: T): boolean
  remove(value: T): boolean
  inOrder(visit: (node: Node<number, T> | undefined) => boolean): boolean
  size(): number
  isEmpty(): boolean
}
```

- `T` is structural; the comparator returns a negative/zero/positive number for
  smaller/equal/larger values.
- `find` returns a matching node or `undefined`; `contains` returns a boolean;
  `remove` returns whether a matching node was removed.

## Safety And Semantics

- Inserting an equal value increments its node's `occurrences` metadata without
  adding a tree node or increasing `size`.
- `inOrder` visits ascending values and stops early when the visitor returns
  `false`.
- Removal preserves BST ordering across leaf, one-child, and two-child cases.

## Complexity Targets

- An unbalanced tree has O(height) insert/find/contains/remove and O(n)
  in-order traversal; height can be n.

## Verification

```sh
bun run test -- src/data-structures/trees/binary-search-trees/binary-search-tree/binary-search-tree.test.ts
bun run bench -- src/data-structures/trees/binary-search-trees/binary-search-tree/binary-search-tree.bench.ts
```

Tests cover insertion/find/contains, duplicate occurrence metadata, ordered and
early-stopped traversal, leaf/one-child/two-child removal, root replacement,
empty behavior, and size integrity.
The benchmark covers shuffled insertion, middle lookup, in-order traversal, and
root removal using a deterministic 1,000-node tree.
