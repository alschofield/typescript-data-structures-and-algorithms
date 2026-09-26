import { describe, expect, it } from "vitest";
import { breadthFirstSearch } from "./breadth-first-search";
import { AdjacencyList } from "@ds/graphs/representations/adjacency-list/adjacency-list";

describe("Breadth-First Search", () => {
  it("exports the required breadthFirstSearch API", () => {
    expect(breadthFirstSearch).toBeDefined();
  });

  it("visits each reachable node once in breadth-first order", () => {
    const graph = graphWithCycle();
    const visited = breadthFirstSearch(graph, 0, () => true).map((node) => node.key);
    expect(visited).toEqual([0, 1, 2, 3]);
  });

  it("stops after the visitor rejects a node and handles absent sources", () => {
    const graph = graphWithCycle();
    expect(breadthFirstSearch(graph, 0, (node) => node.key !== 1).map((node) => node.key)).toEqual([0, 1]);
    expect(breadthFirstSearch(graph, 99, () => true)).toEqual([]);
  });
});

function graphWithCycle(): AdjacencyList<number, number> {
  const graph = new AdjacencyList<number, number>(true, (left, right) => (left ?? 0) - (right ?? 0));
  [0, 1, 2, 3].forEach((key) => graph.addNode(key, key));
  graph.addEdge(0, 1, 9);
  graph.addEdge(0, 2, 1);
  graph.addEdge(1, 3, 4);
  graph.addEdge(2, 0, 2);
  return graph;
}
