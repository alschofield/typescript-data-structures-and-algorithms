# Union-Find

## Public Contract

`UnionFind` exposes `constructor(elementCount)`, `find(element)`, `union(a, b)`, `connected(a, b)`, and `setCount`.

- Elements are implied numeric indexes, but the visible tests do not declare exact parameter/return types, index range, invalid-input behavior, or property-versus-method form for `setCount`.

## Safety And Semantics

- `elementCount`, `element`, `a`, and `b` need finite-integer/range validation before indexing parent storage.
- The current tests do not state whether invalid indexes throw, return optional results, or no-op; `null` and `undefined` are not documented error values.
- `union` mutates connectivity. Tests must establish representative stability, no-op behavior for already-connected elements, and `setCount` changes.

## Complexity And Verification

- With path compression and union by rank/size, conventional targets are O(alpha(n)) amortized `find`/`union`/`connected` and O(n) construction/storage.
- Verify zero/invalid counts, invalid numeric indexes, singleton and repeated unions, transitive connectivity, set-count semantics, and representative equality rather than a specific root.
