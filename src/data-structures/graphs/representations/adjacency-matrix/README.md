# Adjacency Matrix

## Public Contract

The visible test contract requires `AdjacencyMatrix` with `create(directed)`, `addNode(value)`, stable dense indexes, handle-based weighted edges, and `GraphView` index adaptation.

- Exact TypeScript signatures, node-handle type, edge methods, return values, and error behavior are not declared by the current tests.
- GraphView adaptation must expose dense numeric vertex indexes rather than representation-specific handles.

## Safety And Semantics

- Node indexes and weighted-edge values need finite-number validation before matrix addressing or storage.
- Nullish node values, invalid/foreign handles, duplicate edges, self-loops, directedness behavior, and reference ownership are unverified.
- Mutations must preserve dense-index stability. Tests must establish graph-view liveness and neighbor-output ownership.

## Complexity And Verification

- A conventional adjacency matrix uses O(V^2) storage, O(1) edge lookup/update, and O(V) neighbor scanning.
- Verify structural values, stable dense indexes, matrix growth, weighted edges, invalid numeric values, directedness once defined, graph-view adapter equivalence, and mutation/reference semantics.
