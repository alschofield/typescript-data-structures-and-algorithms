# Singly Linked List

## Public Contract

`SinglyLinkedList<T>` exposes `pushFront`, `pushBack`, `popFront`, `popBack`, `get`, `insert`, `remove`, `size`, and `isEmpty`.

- `T` is structural and inserted object values retain reference identity unless implementation states otherwise.
- The visible tests do not declare parameter/return types, index bounds, empty behavior, or property-versus-method forms.

## Safety And Semantics

- Index arguments need explicit finite-integer and bounds validation before traversal; `undefined` and `null` cannot be assumed to mean absence because they may be valid `T` values.
- The current contract does not say whether invalid indexes throw, return optional results, or no-op.
- Mutations must preserve size and valid links; verify reference identity for removed and retrieved objects.

## Complexity And Verification

- Conventional singly linked-list targets are O(1) front insertion/removal and O(n) indexed, back, and tail-removal operations without a tail node.
- Verify empty/singleton transitions, invalid numeric indexes, front/back order, insertion/removal boundaries, nullish values if supported, and reference identity.
