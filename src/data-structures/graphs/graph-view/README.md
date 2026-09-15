# GraphView

## Public Contract

`GraphView` is structural and exposes `vertexCount` plus `neighbors(vertex: number): Iterable<{ vertex: number; weight: number }>`.

- Vertices are numeric indexes. The test scaffold requires deterministic weighted neighbor iteration and adapters for adjacency lists, adjacency matrices, and imported graphs.
- The test does not specify whether `vertexCount` is a property or method, though the existing contract names it without call syntax.

## Safety And Semantics

- A vertex index must be finite, integral, and in range before it reaches an adapter. Neighbor `vertex` values require the same property.
- Weight finiteness, sign constraints, out-of-range behavior, nullish inputs, and whether iteration observes later graph mutations are not specified by the visible tests.
- An adapter must not leak representation-specific node handles or values through this interface.

## Complexity And Verification

- Complexity is representation-dependent: adjacency-list iteration is conventionally O(deg(v)); matrix iteration is O(V).
- Verify structural assignment, dense indexes, deterministic iteration, invalid numeric indexes, edge-weight preservation, adapter equivalence, and non-mutation by iteration.
