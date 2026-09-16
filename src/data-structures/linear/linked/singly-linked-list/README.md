# Singly Linked List

## Public Contract

```ts
class SinglyLinkedList<T> {
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

- `T` is structural and inserted object values retain reference identity unless implementation states otherwise.
- `get` and `remove` accept existing indexes `0..size()-1`; `insert` also
  accepts `size()` to append. Empty and invalid lookups/removals return
  `undefined`; invalid insertion returns `false`.

## Safety And Semantics

- `pushFront`/`pushBack`/`insert` return `true` after mutation. `popFront`,
  `popBack`, and `remove` return the linked node rather than its raw value.
- Mutations preserve size and forward links; retrieved and removed values retain
  their reference identity.

## Complexity Targets

- Conventional singly linked-list targets are O(1) front insertion/removal and O(n) indexed, back, and tail-removal operations without a tail node.

## Verification

```sh
npm test -- src/data-structures/linear/linked/singly-linked-list/singly-linked-list.test.ts
npm run bench -- src/data-structures/linear/linked/singly-linked-list/singly-linked-list.bench.ts
```

Tests cover list order, insertion/removal, empty/singleton transitions, invalid
indexes, size consistency, and reference identity. Benchmarks contrast O(1)
front insertion with traversal-bound back and middle operations.
