# Adjacency List

## Public Contract

`new AdjacencyList(directed, compare)` stores keyed nodes. `addNode(key, value)`
assigns a stable dense `index`; `addEdge(from, to, weight)` returns `false` when
an endpoint is missing or the directed edge already exists.

## Safety And Semantics

- `neighbors(key, visit)` retains the callback API. `neighbors(node)` provides
  the `GraphView` iterable-edge API used by traversals.
- Undirected graphs store both traversal directions but count one logical edge.

## Complexity And Verification

- Conventional adjacency-list targets are O(V + E) storage and O(deg(v)) neighbor iteration; exact update costs depend on the unimplemented API.
- Neighbor order follows edge insertion order.
