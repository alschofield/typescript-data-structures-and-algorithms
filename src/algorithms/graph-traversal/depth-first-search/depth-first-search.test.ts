import { describe, expect, it } from "vitest";
import { depthFirstSearch } from "./depth-first-search";
import { AdjacencyMatrix } from "@ds/graphs/representations/adjacency-matrix/adjacency-matrix";

describe("Depth-First Search", () => {
  it("exports the required depthFirstSearch API", () => {
    expect(depthFirstSearch).toBeDefined();
  });

  it("visits each reachable node once in depth-first order", () => {
    const graph = graphWithCycle();
    const visited = depthFirstSearch(graph, 10, () => true).map((node) => node.key);
    expect(visited).toEqual([10, 20, 40, 30]);
  });

  it("stops after the visitor rejects a node and handles empty graphs", () => {
    const graph = graphWithCycle();
    expect(depthFirstSearch(graph, 10, (node) => node.key !== 20).map((node) => node.key)).toEqual([10, 20]);
    const empty = new AdjacencyMatrix<number>(true, (left, right) => (left as number) - (right as number));
    expect(depthFirstSearch(empty, 0, () => true)).toEqual([]);
  });
});

function graphWithCycle(): AdjacencyMatrix<number> {
  const graph = new AdjacencyMatrix<number>(true, (left, right) => (left as number) - (right as number));
  [10, 20, 30, 40].forEach((key) => graph.addNode(key, key));
  graph.addEdge(10, 20, 9);
  graph.addEdge(10, 30, 1);
  graph.addEdge(20, 40, 4);
  graph.addEdge(30, 10, 2);
  return graph;
}
