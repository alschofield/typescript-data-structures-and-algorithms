import { describe, expect, it } from "vitest";
import type { Edge, GraphView, Node, UndirectedEdgeGraphView } from "@ds/graphs/graph-view/graph-view";

describe("GraphView", () => {
  it("accepts structural nodes, weighted edges, and deterministic neighbors", () => {
    const first = graphNode("first", 0);
    const second = graphNode("second", 1);
    const third = graphNode("third", 2);
    const firstToSecond: Edge<string> = { from: first, to: second, weight: 4 };
    const firstToThird: Edge<string> = { from: first, to: third, weight: 1 };
    first.edges.push(firstToSecond, firstToThird);
    const nodes = [first, second, third];
    const graph: GraphView<string> = {
      directed: () => true,
      nodeCount: () => nodes.length,
      nodeByKey: (key) => nodes.find((node) => node.key === key),
      neighbors: (node) => node.edges,
    };

    expect(graph.directed()).toBe(true);
    expect(graph.nodeCount()).toBe(3);
    expect(graph.nodeByKey(1)).toBe(second);
    expect(graph.nodeByKey(99)).toBeUndefined();
    expect([...graph.neighbors(first)]).toEqual([firstToSecond, firstToThird]);
    expect([...graph.neighbors(first)]).toEqual([...graph.neighbors(first)]);
  });

  it("permits an empty edge sequence for a valid isolated node", () => {
    const isolated = graphNode("isolated", 0);
    const graph: GraphView<unknown> = {
      directed: () => false,
      nodeCount: () => 1,
      nodeByKey: (key) => (key === isolated.key ? isolated : undefined),
      neighbors: () => [],
    };

    expect([...graph.neighbors(isolated)]).toEqual([]);
  });

  it("retains universal node links and edge endpoint references", () => {
    const root = graphNode({ label: "root" }, 0);
    const child = graphNode({ label: "child" }, 1);
    const edge: Edge<{ label: string }> = { from: root, to: child, weight: 7 };
    root.children.push(child);
    root.edges.push(edge);
    child.parent = root;

    expect(root.children[0]).toBe(child);
    expect(child.parent).toBe(root);
    expect(root.edges[0].from).toBe(root);
    expect(root.edges[0].to).toBe(child);
    expect(root.edges[0].weight).toBe(7);
  });

  it("separates logical undirected edges from traversal neighbors", () => {
    const left = graphNode("left", 0);
    const right = graphNode("right", 1);
    const logicalEdge: Edge<string> = { from: left, to: right, weight: 3 };
    left.edges.push(logicalEdge);
    right.edges.push({ from: right, to: left, weight: 3 });
    const graph: UndirectedEdgeGraphView<string> = {
      directed: () => false,
      nodeCount: () => 2,
      nodeByKey: (key) => [left, right].find((node) => node.key === key),
      neighbors: (node) => node.edges,
      edges: function* () {
        yield logicalEdge;
      },
    };

    expect(graph.directed()).toBe(false);
    expect([...graph.neighbors(left)]).toHaveLength(1);
    expect([...graph.neighbors(right)]).toHaveLength(1);
    expect([...graph.edges()]).toEqual([logicalEdge]);
  });
});

function graphNode<T>(value: T, key: number): Node<T> {
  return {
    key,
    value,
    occurrences: 0,
    isEndOfWord: false,
    rank: 0,
    children: [],
    edges: [],
  };
}
