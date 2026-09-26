import { describe, expect, it } from "vitest";
import type { GraphView } from "@ds/graphs/graph-view/graph-view";
import { AdjacencyMatrix } from "./adjacency-matrix";

describe("Adjacency Matrix", () => {
  it("exports the required AdjacencyMatrix API", () => {
    expect(AdjacencyMatrix).toBeDefined();
  });

  it("uses dense internal indexes for non-dense numeric keys", () => {
    const graph = new AdjacencyMatrix<string>(true, (left, right) => (left as number) - (right as number));
    graph.addNode(10, "first");
    graph.addNode(42, "second");
    expect(graph.addEdge(10, 42, 7)).toBe(true);
    expect(graph.addEdge(10, 42, 7)).toBe(false);
    expect(graph.nodeByKey(42)?.index).toBe(1);
    expect(graph.edgeCount()).toBe(1);
    const view: GraphView<number, string> = graph;
    expect([...view.neighbors(graph.nodeByKey(10)!)]).toMatchObject([{ weight: 7 }]);
  });

  it("makes both directions visible while counting one undirected edge", () => {
    const graph = new AdjacencyMatrix<string>(false, (left, right) => (left as number) - (right as number));
    graph.addNode(0, "left");
    graph.addNode(1, "right");
    graph.addEdge(0, 1, 2);
    const neighbors: number[] = [];
    graph.neighbors(1, (node) => {
      neighbors.push(node.key!);
      return true;
    });
    expect(neighbors).toEqual([0]);
    expect(graph.edgeCount()).toBe(1);
  });
});
