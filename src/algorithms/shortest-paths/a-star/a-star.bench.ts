import { bench } from "vitest";
import type { Edge, GraphView, Node } from "@ds/graphs/graph-view/graph-view";
import { aStar } from "./a-star";

const graph = createGraph(1_000);

bench("aStar finds a path in a 1,000-node graph", () => {
  aStar(graph, 0, 999, () => 0);
});

function createGraph(nodeCount: number): GraphView<number, undefined> {
  const nodes: Array<Node<number, undefined>> = Array.from({ length: nodeCount }, (_, key) => ({ key, value: undefined }));
  const adjacency: Array<Array<Edge<number, undefined>>> = Array.from({ length: nodeCount }, () => []);

  for (let from = 0; from < nodeCount; from += 1) {
    for (const offset of [1, 3, 17]) {
      const to = from + offset;
      if (to < nodeCount) adjacency[from].push({ from: nodes[from], to: nodes[to], weight: offset });
    }
  }

  return {
    directed: () => true,
    nodeCount: () => nodes.length,
    nodeByKey: (key) => nodes[key],
    neighbors: (node) => adjacency[node.key!],
  };
}
