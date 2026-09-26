# Union-Find

## Public Contract

`UnionFind` manages dense numeric indexes from `0` through `size() - 1`.
`find` returns the representative node, `union` returns whether it joined two
previously separate components, and `connected` compares representatives.

## Safety And Semantics

- Construction rejects a negative or non-safe-integer count. Lookup operations
  throw `RangeError` for an invalid index.
- `setCount` grows the usable range and returns `false` for invalid or shrinking
  requests, preserving existing component relationships.

## Complexity And Verification

- With path compression and union by rank/size, conventional targets are O(alpha(n)) amortized `find`/`union`/`connected` and O(n) construction/storage.
- `find` uses path compression; `union` uses rank.
