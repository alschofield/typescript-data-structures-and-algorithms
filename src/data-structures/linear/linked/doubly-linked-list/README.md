# Doubly Linked List

## How It Works

The list keeps head and tail nodes, and every internal node links to both
neighbors. Indexed operations begin from the closer end.

## Required API

```ts
export class DoublyLinkedList<A> {
  head: Node<undefined, A> | undefined;
  tail: Node<undefined, A> | undefined;
  length: number;
  constructor();
  pushFront(value: A): boolean;
  pushBack(value: A): boolean;
  popFront(): Node<undefined, A> | undefined;
  popBack(): Node<undefined, A> | undefined;
  get(index: number): Node<undefined, A> | undefined;
  insert(index: number, value: A): boolean;
  remove(index: number): Node<undefined, A> | undefined;
  size(): number;
  isEmpty(): boolean;
}
```

The module default export is `DoublyLinkedList`.

## Contract

Mutations preserve list order and update `head`, `tail`, and `length`.
`get` and `remove` accept only integer indexes in `[0, size())`, returning
`undefined` without mutation for invalid indexes. `insert` also accepts
`size()` for append and returns `false` for invalid indexes. Empty pops return
`undefined`; successful insertion methods return `true`. Duplicates are
separate nodes, and returned nodes retain their links as left by the operation.

## Complexity Targets

O(1) end pushes, end pops, `size`, and `isEmpty`; O(n) indexed access,
insertion, and removal; O(n) storage.

## Verification

```sh
bun run test -- src/data-structures/linear/linked/doubly-linked-list/doubly-linked-list.test.ts
```
