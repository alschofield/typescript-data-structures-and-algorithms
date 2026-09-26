# Binary Heap

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

Nodes are stored in an array-backed min heap. `push` bubbles a new node up;
`pop` exchanges the root with the final node, removes the old minimum, then
sifts the replacement down.

## Required API

```ts
export class BinaryHeap<V> {
  constructor(compare: (left: V | undefined, right: V | undefined) => number);
  push(value: V): boolean;
  pop(): Node<number, V> | undefined;
  peek(): Node<number, V> | undefined;
  size(): number;
  isEmpty(): boolean;
}
```

The module default export is `BinaryHeap`.

## Contract

`push` inserts a node with a monotonically increasing key and returns `true`.
`peek` returns the current minimum node without mutation; `pop` removes and
returns it. Both return `undefined` when empty. Comparator-equal values are
allowed, but their removal order is not guaranteed to be stable. The comparator
is not validated; its runtime failures propagate. Nodes exposed by `peek` or
`pop` are the heap's stored node objects.

## Complexity Targets

O(log n) `push` and `pop`, O(1) `peek`, `size`, and `isEmpty`, and O(n) storage.

## Verification

```sh
bun run test -- src/data-structures/trees/heaps/binary-heap/binary-heap.test.ts
```
