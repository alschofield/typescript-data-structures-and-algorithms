# Queue

## Public Contract

`Queue<T>` exposes `enqueue(item)`, `dequeue()`, `peek()`, `size`, and `isEmpty`.

- `T` is structural; object values retain reference identity unless implementation says otherwise.
- The test scaffold does not define return types, constructor arguments, empty-operation behavior, or property-versus-method forms.

## Safety And Semantics

- `undefined` and `null` may be valid stored values unless the type excludes them, so empty-state signaling must be unambiguous and tested.
- The visible tests do not state whether empty `dequeue`/`peek` throws or returns an optional/sentinel value.
- Verify FIFO order, size mutation, and reference identity rather than assuming an array or ring-buffer implementation.

## Complexity And Verification

- The conventional target is amortized O(1) enqueue and O(1) dequeue/peek/size/isEmpty.
- Verify empty behavior, FIFO order across reuse, nullish values if supported, size consistency, and reference preservation.
