# Singly Linked List

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

The list keeps a head node and a length. Each node points only to its next
neighbor, so operations at the back traverse from the head.

## Required API

```ts
export class SinglyLinkedList<A> {
  head: Node<undefined, A> | undefined;
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

The module default export is `SinglyLinkedList`.

## Contract

Mutating operations update this list and retain insertion order. `get` and
`remove` require an integer index in `[0, size())`; invalid indexes return
`undefined` without mutation. `insert` additionally accepts `size()` for
append; invalid indexes return `false`. Empty pops return `undefined`.
Successful pushes and inserts return `true`; duplicates are distinct nodes.
Returned nodes are the removed or stored nodes and retain their links as left by
the operation.

## Complexity Targets

O(1) `pushFront`, `popFront`, `size`, and `isEmpty`; O(n) `pushBack`,
`popBack`, indexed access, insertion, and removal; O(n) storage.

## Verification

```sh
bun run test -- src/data-structures/linear/linked/singly-linked-list/singly-linked-list.test.ts
```
