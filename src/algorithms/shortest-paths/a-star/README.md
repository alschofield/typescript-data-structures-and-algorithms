# A-Star

## How It Works

Order the frontier by g(n) + h(n), cost so far plus an admissible remaining-cost estimate.

## Required API

Implement `aStar<T>(graph: GraphView<T>, source: NodeHandle, goal: NodeHandle, heuristic: (node: NodeHandle) => number): NodeHandle[] | undefined`.

## Contract

- Consume dynamic GraphView weighted neighbors. Reject invalid or foreign source/goal handles and require non-negative weights. With zero heuristic, match Dijkstra behavior. Resolve frontier ties deterministically, return an optimal source-to-goal handle path for admissible heuristics, and return undefined when unreachable. Do not use a library priority queue.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- Worst case O((V + E) log V) time and O(V) auxiliary space.
