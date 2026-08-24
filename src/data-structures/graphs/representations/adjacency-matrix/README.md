# Adjacency Matrix

## How It Works

A dynamically grown N by N weighted edge grid indexed by node-handle indexes; the dense graph representation.

## Required API

Implement `AdjacencyMatrix<T>` with: `create(directed)`, `addNode(value): NodeHandle`, `findNode(value): NodeHandle | undefined`, `nodeAt(index): NodeHandle | undefined`, `nodeValue(node): T | undefined`, `addEdge(from: NodeHandle, to: NodeHandle, weight)`, `removeEdge`, `hasEdge`, `neighbors(node)`, `nodeCount`, `edgeCount`, and `asGraphView(): GraphView<T>`. `neighbors(node)` yields deterministic `{ node: NodeHandle, weight: number }` edges.

## Contract

- `create` starts empty; `addNode` returns a stable graph-local handle. `nodeAt` uses insertion order and `findNode` locates a value. Reject foreign/invalid handles and non-finite weights. Fresh cells are clear. Undirected mutations preserve symmetry and weight. Duplicate adds and absent removes are clean no-ops. Neighbor iteration scans the full row. `asGraphView()` exposes dynamic node lookup and weighted handle iteration without representation details.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- addNode O(N^2); add/remove/has O(1); neighbor iteration O(N); full traversal O(N^2); O(N^2) space.
