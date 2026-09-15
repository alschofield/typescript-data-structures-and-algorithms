# Stack

## Public Contract

`Stack<T>` exposes `push(item)`, `pop()`, `peek()`, `size`, and `isEmpty`.

- `T` is structural; inserted object values are references, not clones, unless implementation states otherwise.
- The visible tests do not declare method return types, property-versus-method forms, constructor arguments, or empty-operation results.

## Safety And Semantics

- `undefined` and `null` are potentially valid `T` values unless excluded by the eventual type. Empty-state signaling therefore must be explicit and tested.
- The tests do not specify whether `pop`/`peek` throw, return a sentinel, or return an optional value on empty state.
- Mutation is intrinsic to stack operations; verify which calls change size and that returned object references remain identical.

## Complexity And Verification

- The conventional target is amortized O(1) `push`, O(1) `pop`/`peek`/`size`/`isEmpty`, and O(n) storage.
- Verify LIFO order, empty behavior, repeated reuse, nullish values if supported, size consistency, and reference identity.
