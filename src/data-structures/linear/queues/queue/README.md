# Queue

## Public Contract

```ts
class Queue<T> {
  enqueue(value: T): boolean
  dequeue(): T | undefined
  peek(): T | undefined
  size(): number
  isEmpty(): boolean
}
```

- `T` is structural; object values retain reference identity unless implementation says otherwise.
- `enqueue` returns `true` after appending; `dequeue` and `peek` return `undefined` when empty.

## Safety And Semantics

- `enqueue` and `dequeue` mutate queue state; `peek`, `size`, and `isEmpty` do not.
- Object values retain reference identity; the queue does not clone inserted values.

## Complexity Targets

- The current array-backed implementation provides amortized O(1) `enqueue`, O(1) `peek`/`size`/`isEmpty`, and O(n) `dequeue` because `Array.shift()` reindexes remaining values.

## Future Improvement

Keep this direct `push`/`shift` implementation as the baseline FIFO exercise.
If queue throughput becomes important, replace it with a head-offset array that
periodically compacts consumed prefixes, or with a circular buffer. Either
design can make dequeue amortized O(1); do not add a saved front index to this
implementation without deliberately migrating to one of those representations.

## Verification

```sh
npm test -- src/data-structures/linear/queues/queue/queue.test.ts
npm run bench -- src/data-structures/linear/queues/queue/queue.bench.ts
```

Tests cover FIFO order, non-mutating peek, empty operations, size consistency,
and reference identity. The benchmark isolates enqueue, dequeue, and peek.
