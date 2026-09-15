# Breadth-First Search

## Public Contract

`breadthFirstSearch(graph: GraphView, source: number): number[] | undefined`

- `GraphView` is structural: it must satisfy the shared index-based graph-view contract, not a representation-specific class.
- `source` and returned vertices are dense numeric indexes. `undefined` is the documented absence result; `null` is not an interchangeable failure result.
- Edge weights are explicitly ignored.

## Safety And Semantics

- Validate that `source` is a finite integer in `[0, graph.vertexCount)` before using it as an index.
- The visible test contract does not define visit order, nullish graph handling, mutation behavior, or whether the returned array is a fresh container. Do not promise these details yet.
- Traversal must not mistake `undefined` for a valid vertex index or mutate the graph unless code/tests explicitly permit it.

## Complexity And Verification

- The conventional target is O(V + E) time and O(V) auxiliary space with adjacency iteration.
- Verify invalid numeric sources, empty/disconnected/cyclic/self-loop graphs, weighted edges being ignored, deterministic order if implemented, and graph/reference preservation.
