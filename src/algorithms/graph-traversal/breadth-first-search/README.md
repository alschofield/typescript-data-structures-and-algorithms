# Breadth-First Search

## Public Contract

`breadthFirstSearch(graph, source, visit)` returns visited `Node` objects in
breadth-first order. `source` is resolved through `graph.nodeByKey`; an empty
graph or missing source returns an empty array. Edge weights are ignored.

## Safety And Semantics

- Nodes are marked visited when enqueued, so cycles and converging paths are
  emitted once. Returning `false` from `visit` stops traversal after that node.

## Complexity And Verification

- The conventional target is O(V + E) time and O(V) auxiliary space with adjacency iteration.
- The traversal does not mutate the graph.
