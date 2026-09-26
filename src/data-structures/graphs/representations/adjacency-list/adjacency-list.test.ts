import { describe, expect, it } from "vitest";
import type { GraphView } from "@ds/graphs/graph-view/graph-view";
import { AdjacencyList } from "./adjacency-list";

describe("Adjacency List", () => {
  it("exports the required AdjacencyList API", () => {
    expect(AdjacencyList).toBeDefined();
  });

  it("tracks nodes, logical edges, and directed neighbors", () => {
    const graph = new AdjacencyList<string, string>(true, (left, right) => left === right ? 0 : -1);
    graph.addNode("a", "first");
    graph.addNode("b", "second");
    expect(graph.addEdge("a", "b", 7)).toBe(true);
    expect(graph.addEdge("a", "b", 7)).toBe(false);
    expect(graph.nodeCount()).toBe(2);
    expect(graph.edgeCount()).toBe(1);
    expect(graph.nodeByKey("a")?.index).toBe(0);
    const view: GraphView<string, string> = graph;
    expect([...view.neighbors(graph.nodeByKey("a")!)]).toMatchObject([{ weight: 7 }]);
  });

  it("adds both traversal directions for an undirected edge", () => {
    const graph = new AdjacencyList<number, string>(false, (left, right) => left === right ? 0 : -1);
    graph.addNode(10, "left");
    graph.addNode(20, "right");
    graph.addEdge(10, 20, 1);
    const visited: number[] = [];
    graph.neighbors(20, (node) => {
      visited.push(node!.key!);
      return true;
    });
    expect(visited).toEqual([10]);
    expect(graph.edgeCount()).toBe(1);
  });
});
