import { bench } from "vitest";
import type { Edge, Node, UndirectedEdgeGraphView } from "@ds/graphs/graph-view/graph-view";
import { kruskal } from "./kruskal";

const graph = createGraph(1_000);

bench("kruskal finds a minimum spanning forest in a 1,000-node graph", () => {
  kruskal(graph);
});

function createGraph(nodeCount: number): UndirectedEdgeGraphView<number, undefined> {
  const nodes: Array<Node<number, undefined>> = Array.from(
    { length: nodeCount },
    (_, key) => ({ key, value: undefined }),
  );
  const edges: Array<Edge<number, undefined>> = [];

  for (let from = 0; from < nodeCount - 1; from += 1) {
    edges.push({ from: nodes[from], to: nodes[from + 1], weight: 1 });
  }

  for (let from = 0; from < nodeCount - 10; from += 10) {
    edges.push({ from: nodes[from], to: nodes[from + 10], weight: 10 });
  }

  return {
    directed: () => false,
    nodeCount: () => nodes.length,
    nodeByKey: (key) => nodes[key],
    neighbors: (node) => edges.filter((edge) => edge.from === node || edge.to === node),
    edges: () => edges,
  };
}
