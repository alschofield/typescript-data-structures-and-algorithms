# Adjacency List

## Public Contract

The visible test contract requires `AdjacencyList` with `create(directed)`, `addNode(value)`, stable dense indexes, handle-based weighted edges, and `GraphView` index adaptation.

- The test does not declare the exact TypeScript signatures, node-handle type, edge methods, lookup methods, return values, or error behavior.
- `GraphView` adaptation must use dense numeric vertex indexes rather than expose handles.

## Safety And Semantics

- Directedness, handles, indexes, and weights need implementation-defined validation. In particular, numbers used as indexes or weights must be finite before storage/traversal.
- `null`/`undefined` node values, invalid or foreign handles, duplicate edges, self-loops, and reference ownership are not specified by visible tests.
- Adding nodes/edges is mutating; tests must verify index stability, graph-view liveness, stored value reference identity, and whether neighbor output is a snapshot or view.

## Complexity And Verification

- Conventional adjacency-list targets are O(V + E) storage and O(deg(v)) neighbor iteration; exact update costs depend on the unimplemented API.
- Verify structural values, directed/undirected behavior once defined, stable dense indexes, weighted edges, invalid numeric values, deterministic graph-view neighbors, and mutation/reference semantics.
