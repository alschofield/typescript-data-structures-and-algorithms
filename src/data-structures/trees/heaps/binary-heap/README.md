# Binary Heap

## Public Contract

`BinaryHeap<T>` is a min-heap. Its comparator returns a negative value when the
left value has higher priority. `push` returns `true`; `pop` and `peek` return
the stored `{ key, value }` node or `undefined` when empty.

## Safety And Semantics

- The heap stores caller values by reference and allocates a monotonic numeric
  key for each insertion.
- Push/pop mutate the heap. Equal-priority ordering is not guaranteed stable.

## Complexity And Verification

- Conventional targets are O(log n) push/pop, O(1) peek/size/isEmpty, and O(n) storage.
- Verify with `bun run test -- src/data-structures/trees/heaps/binary-heap/binary-heap.test.ts`.
