# Adjacency Matrix

## Public Contract

`new AdjacencyMatrix(directed, compare)` stores keyed nodes in a dense internal
matrix. `addNode(key, value)` assigns a stable dense `index`; keys need not be
matrix indexes. `nodeByKey` and `nodeAtKey` resolve nodes by their public key.

## Safety And Semantics

- `addEdge(from, to, weight)` uses public keys, returns `false` for a missing
  endpoint or duplicate, and counts undirected pairs once.
- `neighbors(key, visit)` is the callback API; `neighbors(node)` returns
  iterable edges for `GraphView` consumers.

## Complexity And Verification

- A conventional adjacency matrix uses O(V^2) storage, O(1) edge lookup/update, and O(V) neighbor scanning.
- Matrix neighbor iteration follows increasing dense-index order.
