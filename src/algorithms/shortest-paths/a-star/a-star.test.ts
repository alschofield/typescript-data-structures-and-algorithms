import { describe, expect, it } from "vitest";
import type { Edge, GraphView, Node } from "@ds/graphs/graph-view/graph-view";
import { aStar } from "./a-star";

describe("A-Star", () => {
  it("returns the lowest-cost source-to-goal node path", () => {
    const graph = graphView(5, [
      [0, 1, 10],
      [0, 2, 1],
      [2, 1, 1],
      [1, 4, 1],
      [2, 4, 10],
    ]);

    expect(aStar(graph, 0, 4, () => 0)?.map((node) => node.key)).toEqual([0, 2, 1, 4]);
  });

  it("supports zero-weight edges and skips stale heap entries", () => {
    const graph = graphView(4, [
      [0, 1, 5],
      [0, 2, 0],
      [2, 1, 0],
      [1, 3, 1],
    ]);
    const neighbors = graph.neighbors;
    let nodeOneNeighborReads = 0;
    graph.neighbors = (node) => {
      if (node.key === 1) nodeOneNeighborReads += 1;
      return neighbors(node);
    };

    expect(aStar(graph, 0, 3, () => 0)?.map((node) => node.key)).toEqual([0, 2, 1, 3]);
    expect(nodeOneNeighborReads).toBe(1);
  });

  it("returns undefined for invalid endpoints or an unreachable goal", () => {
    const graph = graphView(3, [[0, 1, 1]]);

    expect(aStar(graph, -1, 1, () => 0)).toBeUndefined();
    expect(aStar(graph, 0, 3, () => 0)).toBeUndefined();
    expect(aStar(graph, 0, 2, () => 0)).toBeUndefined();
  });

  it("returns the source node when source and goal match", () => {
    const graph = graphView(2, [[0, 1, 1]]);

    expect(aStar(graph, 1, 1, () => 0)?.map((node) => node.key)).toEqual([1]);
  });
});

function graphView(nodeCount: number, connections: Array<readonly [number, number, number]>): GraphView<number, undefined> {
  const nodes: Array<Node<number, undefined>> = Array.from({ length: nodeCount }, (_, key) => ({ key, value: undefined }));
  const adjacency: Array<Array<Edge<number, undefined>>> = Array.from({ length: nodeCount }, () => []);

  for (const [from, to, weight] of connections) {
    adjacency[from].push({ from: nodes[from], to: nodes[to], weight });
  }

  return {
    directed: () => true,
    nodeCount: () => nodes.length,
    nodeByKey: (key) => nodes[key],
    neighbors: (node) => adjacency[node.key!],
  };
}
