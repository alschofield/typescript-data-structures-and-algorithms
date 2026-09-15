# Depth-First Search

## Public Contract

`depthFirstSearch(graph: GraphView, source: number): number[] | undefined`

- `GraphView` is structural and index-based. `source` and every returned value are dense vertex indexes.
- `undefined` is the documented absence result; `null` is not an interchangeable absence value.
- Edge weights are explicitly ignored.

## Safety And Semantics

- `source` must be a finite integer in `[0, graph.vertexCount)` before it is used as an index.
- The scaffold does not specify traversal order, recursion versus an explicit stack, nullish graph behavior, or output/container mutation semantics.
- Any visited state belongs to the traversal, not the input graph; stored numeric vertex indexes must not be confused with `undefined`.

## Complexity And Verification

- The conventional target is O(V + E) time and O(V) auxiliary space.
- Verify invalid sources, empty/disconnected/cyclic/self-loop graphs, ignored weights, order if implemented, and no graph mutation.
