# Depth-First Search

## Public Contract

`depthFirstSearch(graph, source, visit)` returns visited `Node` objects in
depth-first order. `source` is resolved through `graph.nodeByKey`; an empty
graph or missing source returns an empty array. Edge weights are ignored.

## Safety And Semantics

- Nodes are marked visited when pushed, so cycles and converging paths are
  emitted once. Neighbor insertion is reversed to preserve iterator order.
- Returning `false` from `visit` stops traversal after that node without
  mutating the graph.

## Complexity And Verification

- The conventional target is O(V + E) time and O(V) auxiliary space.
- Verify invalid sources, empty/disconnected/cyclic/self-loop graphs, ignored weights, order if implemented, and no graph mutation.
