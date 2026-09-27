import { describe, expect, it } from "vitest";
import type { Edge, Node, UndirectedEdgeGraphView } from "@ds/graphs/graph-view/graph-view";
import { kruskal } from "./kruskal";

describe("kruskal", () => {
  it("accepts the cheapest acyclic edges", () => {
    const graph = undirectedGraph(4, [
      [0, 1, 4],
      [0, 2, 1],
      [1, 2, 2],
      [1, 3, 5],
      [2, 3, 3],
    ]);

    expect(edgeKeys(kruskal(graph))).toEqual(["0-2", "1-2", "2-3"]);
  });

  it("skips an edge that would create a cycle", () => {
    const graph = undirectedGraph(3, [
      [0, 1, 1],
      [1, 2, 2],
      [0, 2, 3],
    ]);

    expect(edgeKeys(kruskal(graph))).toEqual(["0-1", "1-2"]);
  });

  it("accepts negative and zero-weight edges", () => {
    const graph = undirectedGraph(3, [
      [0, 1, 0],
      [1, 2, -2],
      [0, 2, 4],
    ]);

    expect(kruskal(graph)?.map((edge) => edge.weight)).toEqual([-2, 0]);
    expect(edgeKeys(kruskal(graph))).toEqual(["1-2", "0-1"]);
  });

  it("returns a minimum spanning forest for a disconnected graph", () => {
    const graph = undirectedGraph(5, [
      [0, 1, 2],
      [1, 2, 1],
      [3, 4, 3],
    ]);

    expect(edgeKeys(kruskal(graph))).toEqual(["1-2", "0-1", "3-4"]);
  });

  it("returns undefined for an empty graph", () => {
    expect(kruskal(undirectedGraph(0, []))).toBeUndefined();
  });

  it.each([Infinity, -Infinity, NaN])("returns undefined for a non-finite %s weight", (weight) => {
    expect(kruskal(undirectedGraph(3, [
      [0, 1, 1],
      [1, 2, 2],
      [0, 2, weight],
    ]))).toBeUndefined();
  });
});

function undirectedGraph(
  nodeCount: number,
  connections: Array<readonly [number, number, number]>,
): UndirectedEdgeGraphView<number, undefined> {
  const nodes: Array<Node<number, undefined>> = Array.from(
    { length: nodeCount },
    (_, key) => ({ key, value: undefined }),
  );
  const edges: Array<Edge<number, undefined>> = connections.map(([from, to, weight]) => ({
    from: nodes[from],
    to: nodes[to],
    weight,
  }));

  return {
    directed: () => false,
    nodeCount: () => nodes.length,
    nodeByKey: (key) => nodes[key],
    neighbors: (node) => edges.filter((edge) => edge.from === node || edge.to === node),
    edges: () => edges,
  };
}

function edgeKeys(edges: Array<Edge<number, undefined>> | undefined): Array<string> | undefined {
  return edges?.map((edge) => `${edge.from.key}-${edge.to.key}`);
}
