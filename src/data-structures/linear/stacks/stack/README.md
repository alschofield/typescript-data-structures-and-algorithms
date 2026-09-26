# Stack

## How It Works

An array stores values in insertion order; its final element is the stack top.

## Required API

```ts
export class Stack<A> {
  constructor();
  push(value: A): boolean;
  pop(): A | undefined;
  peek(): A | undefined;
  size(): number;
  isEmpty(): boolean;
}
```

The module default export is `Stack`.

## Contract

`push` appends and returns `true`. `pop` removes and returns the most recently
pushed value; `peek` returns that value without mutation. Empty `pop` and
`peek` return `undefined`. Duplicate values are independent entries and leave
in last-in, first-out order. The constructor takes no inputs.

## Complexity Targets

O(1) amortized `push`, O(1) `pop`, `peek`, `size`, and `isEmpty`; O(n) storage.

## Verification

```sh
bun run test -- src/data-structures/linear/stacks/stack/stack.test.ts
```
