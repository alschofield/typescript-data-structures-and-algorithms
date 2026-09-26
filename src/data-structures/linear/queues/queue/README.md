# Queue

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

An array appends enqueued values at the back and removes dequeued values from
the front.

## Required API

```ts
export class Queue<A> {
  constructor();
  enqueue(value: A): boolean;
  dequeue(): A | undefined;
  peek(): A | undefined;
  size(): number;
  isEmpty(): boolean;
}
```

The module default export is `Queue`.

## Contract

`enqueue` appends and returns `true`. `dequeue` removes and returns the oldest
value; `peek` returns that value without mutation. Empty `dequeue` and `peek`
return `undefined`. Duplicates remain separate entries and are returned in
first-in, first-out order. The constructor takes no inputs.

## Complexity Targets

O(1) amortized `enqueue`, O(n) `dequeue` because it uses `Array.shift()`, O(1)
`peek`, `size`, and `isEmpty`, and O(n) storage.

## Verification

```sh
bun run test -- src/data-structures/linear/queues/queue/queue.test.ts
```
