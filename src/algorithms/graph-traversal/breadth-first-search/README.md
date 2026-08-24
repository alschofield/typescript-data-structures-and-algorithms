# Breadth-First Search

## How It Works

Traverse any GraphView level by level using a FIFO frontier.

## Required API

Implement `breadthFirstSearch<T>(graph: GraphView<T>, source: NodeHandle): NodeHandle[] | undefined`.

## Contract

- Mark node handles visited when enqueued. Visit each reachable node once, leave graph unchanged, reject invalid or foreign source handles, and handle cycles, self-loops, and disconnected graphs. Accept dynamic GraphView adapters and ignore every edge weight. Return handles in visit order. Do not use a library queue.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- O(V + E) time and O(V) auxiliary space with an adjacency list.
