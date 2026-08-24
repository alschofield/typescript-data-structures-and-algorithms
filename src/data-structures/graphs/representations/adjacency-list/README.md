# Adjacency List

## How It Works

One weighted outgoing-edge collection per dynamically added node; the sparse graph representation.

## Required API

Implement `AdjacencyList<T>` with: `create(directed)`, `addNode(value): NodeHandle`, `findNode(value): NodeHandle | undefined`, `nodeAt(index): NodeHandle | undefined`, `nodeValue(node): T | undefined`, `addEdge(from: NodeHandle, to: NodeHandle, weight)`, `hasEdge`, `neighbors(node)`, `nodeCount`, `edgeCount`, and `asGraphView(): GraphView<T>`. `neighbors(node)` yields deterministic `{ node: NodeHandle, weight: number }` edges.

## Contract

- `create` starts empty; `addNode` returns a stable graph-local handle. `nodeAt` uses insertion order and `findNode` locates a value. Reject foreign/invalid handles and non-finite weights. Directedness is fixed at creation; undirected edges are stored in both directions with the same weight. Reject duplicate edges, allow self-loops and negative weights, and return neighbors in deterministic insertion order. `asGraphView()` exposes dynamic node lookup and weighted handle iteration without representation details.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- addNode and addEdge amortized O(1); hasEdge and neighbor iteration O(deg(u)); full traversal O(V + E); O(V + E) space.
