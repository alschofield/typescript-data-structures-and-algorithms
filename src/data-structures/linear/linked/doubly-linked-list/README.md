# Doubly Linked List

## Public Contract

```ts
class DoublyLinkedList<T> {
  pushFront(value: T): boolean
  pushBack(value: T): boolean
  popFront(): Node<T> | undefined
  popBack(): Node<T> | undefined
  get(index: number): Node<T> | undefined
  insert(index: number, value: T): boolean
  remove(index: number): Node<T> | undefined
  size(): number
  isEmpty(): boolean
}
```

- `T` is structural and stored objects retain their references unless implementation states otherwise.
- `get` and `remove` accept existing indexes `0..size()-1`; `insert` also
  accepts `size()` to append. Empty and invalid lookups/removals return
  `undefined`; invalid insertion returns `false`.

## Safety And Semantics

- `pushFront`/`pushBack`/`insert` return `true` after mutation. `popFront`,
  `popBack`, and `remove` return linked nodes rather than raw values.
- Mutations maintain reciprocal `next`/`prev` links, an undefined `head.prev`,
  an undefined `tail.next`, and reference identity for stored values.

## Complexity Targets

- `pushFront`, `pushBack`, `popFront`, `popBack`, `size`, and `isEmpty` are O(1).
  Indexed lookup, insertion, and removal are O(n), but traversal starts from
  the closer end.

## Verification

```sh
npm test -- src/data-structures/linear/linked/doubly-linked-list/doubly-linked-list.test.ts
npm run bench -- src/data-structures/linear/linked/doubly-linked-list/doubly-linked-list.bench.ts
```

Tests cover reciprocal links, head/tail repair, insertion/removal, empty and
singleton transitions, invalid indexes, and reference identity. Benchmarks
contrast constant-time end operations with middle lookup.
