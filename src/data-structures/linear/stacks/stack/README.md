# Stack

## Public Contract

```ts
class Stack<T> {
  push(value: T): boolean
  pop(): T | undefined
  peek(): T | undefined
  size(): number
  isEmpty(): boolean
}
```

- `T` is structural; inserted object values are references, not clones, unless implementation states otherwise.
- `push` returns `true` after appending; `pop` and `peek` return `undefined` when empty.

## Safety And Semantics

- Mutation is intrinsic to `push` and `pop`; `peek`, `size`, and `isEmpty` do not mutate the stack.
- Object values retain reference identity; the stack does not clone inserted values.

## Complexity Targets

- The conventional target is amortized O(1) `push`, O(1) `pop`/`peek`/`size`/`isEmpty`, and O(n) storage.

## Verification

```sh
npm test -- src/data-structures/linear/stacks/stack/stack.test.ts
npm run bench -- src/data-structures/linear/stacks/stack/stack.bench.ts
```

Tests cover LIFO order, non-mutating peek, empty operations, size consistency,
and reference identity. The benchmark isolates push/pop/peek workloads.
