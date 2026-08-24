# Dijkstra

## How It Works

Repeatedly settle the lowest tentative distance and relax its non-negative weighted outgoing edges.

## Required API

Implement `dijkstra<T>(graph: GraphView<T>, source: NodeHandle): DijkstraResult | undefined`, where `DijkstraResult` exposes `distance(node): number | undefined` and `parent(node): NodeHandle | undefined`.

## Contract

- Consume dynamic GraphView weighted neighbors to relax edges. Reject negative weights and invalid or foreign source handles. Unreachable nodes have no distance. Parent handles reconstruct shortest paths. Support cycles, parallel edges, and self-loops. Do not use a library priority queue.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- O((V + E) log V) time with a binary heap and O(V) auxiliary space.
