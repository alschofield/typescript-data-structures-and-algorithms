import { describe, expect, it } from "vitest";
import type { Edge, GraphView, Node } from "@ds/graphs/graph-view/graph-view";
import { dijkstra } from "./dijkstra";

describe("Dijkstra", () => {
  it("calculates distances from source zero", () => {
    const graph = graphView(3, [
      [0, 1, 4],
      [0, 2, 7],
    ]);

    expect(dijkstra(graph, 0)).toEqual({
      distances: [0, 4, 7],
      parents: [undefined, 0, 0],
    });
  });

  it("uses an indirect shorter route and ignores its stale heap entry", () => {
    const graph = graphView(4, [
      [0, 1, 10],
      [0, 2, 1],
      [2, 1, 1],
      [1, 3, 1],
      [2, 3, 10],
    ]);
    const neighbors = graph.neighbors;
    let nodeOneNeighborReads = 0;
    graph.neighbors = (node) => {
      if (node.key === 1) {
        nodeOneNeighborReads += 1;
      }
      return neighbors(node);
    };

    expect(dijkstra(graph, 0)).toEqual({
      distances: [0, 2, 1, 3],
      parents: [undefined, 2, 0, 1],
    });
    expect(nodeOneNeighborReads).toBe(1);
  });

  it("supports zero-weight edges", () => {
    const graph = graphView(3, [
      [0, 1, 0],
      [1, 2, 2],
      [0, 2, 5],
    ]);

    expect(dijkstra(graph, 0)).toEqual({
      distances: [0, 0, 2],
      parents: [undefined, 0, 1],
    });
  });

  it("leaves unreachable vertices at Infinity without predecessors", () => {
    const graph = graphView(4, [[0, 1, 3]]);

    expect(dijkstra(graph, 0)).toEqual({
      distances: [0, 3, Infinity, Infinity],
      parents: [undefined, 0, undefined, undefined],
    });
  });

  it("returns undefined for an invalid source", () => {
    const graph = graphView(2, [[0, 1, 1]]);

    expect(dijkstra(graph, -1)).toBeUndefined();
    expect(dijkstra(graph, 2)).toBeUndefined();
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
