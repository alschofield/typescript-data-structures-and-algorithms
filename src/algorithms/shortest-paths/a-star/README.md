# A-Star

## Public Contract

`aStar(graph: GraphView, source, goal: number, heuristic): number[] | undefined`

- `GraphView` is structural and index-based; `source`, `goal`, and returned path members are dense numeric vertex indexes.
- `undefined` is the documented no-result value. The test scaffold does not declare the heuristic type beyond its name.
- Edge weights are explicitly part of the computation.

## Safety And Semantics

- Validate source and goal as finite integers in range. Heuristic and edge-weight values need finite-number rules before addition and comparison.
- The visible contract does not specify negative/non-finite weights, heuristic admissibility/consistency, tie breaking, unreachable behavior beyond `undefined`, mutation, or output ownership.
- Do not add a path-node handle API, result object, or error behavior absent from implementation/tests.

## Complexity And Verification

- With a binary heap, the conventional worst-case target is O((V + E) log V) time and O(V) auxiliary space.
- Verify invalid indexes, source-equals-goal, unreachable paths, weighted alternatives, zero heuristic, numeric safety, and graph/reference preservation.
