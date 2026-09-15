# Dijkstra

## Public Contract

`dijkstra(graph: GraphView, source: number): DijkstraResult | undefined`

- `GraphView` is structural and uses dense numeric vertex indexes.
- The visible test contract says `DijkstraResult` uses index-keyed outputs, but does not declare its member names or shapes.
- `undefined` is the documented absence result; no `null` result is specified.

## Safety And Semantics

- Validate `source` as a finite integer in `[0, graph.vertexCount)`. Distances and weights require explicit finite-number rules before arithmetic.
- The test contract requires use of edge weights, but does not specify negative/non-finite-weight behavior, unreachable-value representation, tie breaking, graph mutation, or output ownership.
- Do not document a result accessor, parent representation, priority queue, or error mode without implementation evidence.

## Complexity And Verification

- A binary-heap implementation conventionally targets O((V + E) log V) time and O(V) auxiliary space.
- Verify invalid sources, weighted paths, zero-weight edges, disconnected graphs, number safety, index-keyed result shape, and graph/reference preservation.
