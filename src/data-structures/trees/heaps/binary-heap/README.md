# Binary Heap

## Public Contract

`BinaryHeap<T>` exposes `constructor(compare)`, `push`, `pop`, `peek`, `size`, and `isEmpty`.

- `T` is structural; the caller-provided comparator defines priority.
- The visible tests do not define comparator convention, min/max orientation, return types, empty behavior, or property-versus-method forms.

## Safety And Semantics

- Do not use `undefined` or `null` as an implicit empty marker if either can be stored as `T`; the eventual implementation must state empty signaling.
- Comparator results need finite ordering rules before heap arithmetic. Index calculations must remain finite integers within the backing sequence.
- Push/pop mutate; verify size, root selection, equal-priority behavior, and stored object-reference identity.

## Complexity And Verification

- Conventional targets are O(log n) push/pop, O(1) peek/size/isEmpty, and O(n) storage.
- Verify empty/singleton behavior, ordering across interleaved operations, equal priorities, structural objects, nullish values if supported, comparator safety, and reference identity.
