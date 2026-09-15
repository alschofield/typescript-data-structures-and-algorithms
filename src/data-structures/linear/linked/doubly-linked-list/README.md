# Doubly Linked List

## Public Contract

`DoublyLinkedList<T>` exposes `pushFront`, `pushBack`, `popFront`, `popBack`, `get`, `insert`, `remove`, `size`, and `isEmpty`.

- `T` is structural and stored objects retain their references unless implementation states otherwise.
- The test scaffold does not define parameter/return types, index bounds, empty behavior, or property-versus-method forms.

## Safety And Semantics

- Indexes need finite-integer/bounds validation. `undefined` and `null` cannot be assumed to signal absence if valid values of `T` are permitted.
- Invalid-operation behavior and mutator return values remain unspecified.
- Mutations must keep forward/backward links and both ends consistent; tests must verify this through observable operations and reference identity.

## Complexity And Verification

- With head and tail pointers, end operations conventionally target O(1); indexed operations are O(n).
- Verify empty/singleton transitions, front/back operations, index boundaries and invalid numbers, repeated mutation, nullish values if supported, and reference identity.
