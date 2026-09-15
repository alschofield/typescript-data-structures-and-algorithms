# Binary Search Tree

## Public Contract

`BinarySearchTree<T>` exposes `constructor(compare)`, `insert`, `find`, `contains`, `remove`, `inOrder`, `size`, and `isEmpty`.

- `T` is structural; the constructor comparator defines ordering and equivalence.
- The test scaffold does not declare comparator/result conventions, duplicate policy, visitor type, empty/not-found result, or property-versus-method forms.

## Safety And Semantics

- `undefined` and `null` may be valid `T` values unless excluded by the eventual type; absence/error signaling must be unambiguous and verified.
- Comparator results need a documented finite negative/zero/positive convention before branching. Invalid comparator behavior is currently unspecified.
- Insert/remove mutate the tree. Tests must establish returned-reference semantics, duplicate handling, traversal mutation rules, and root/child replacement behavior.

## Complexity And Verification

- An unbalanced tree conventionally has O(height) insert/find/contains/remove and O(n) in-order traversal; height can be n.
- Verify structural objects, empty/not-found behavior, duplicate insertion, removal shapes, comparator safety, sorted traversal, visitor behavior, size, and reference identity.
