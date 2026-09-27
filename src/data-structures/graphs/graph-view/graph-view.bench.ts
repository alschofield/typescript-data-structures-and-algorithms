import { bench } from "vitest";
import type { Edge, GraphView, Node } from "./graph-view";

const graph = createGraph(1_000);

bench("GraphView iterates a 1,000-node graph neighborhood", () => {
  [...graph.neighbors(graph.nodeByKey(0)!)];
});

function createGraph(nodeCount: number): GraphView<number, undefined> {
  const nodes: Array<Node<number, undefined>> = Array.from({ length: nodeCount }, (_, key) => ({ key, value: undefined }));
  const adjacency: Array<Array<Edge<number, undefined>>> = Array.from({ length: nodeCount }, () => []);

  for (let key = 1; key < nodeCount; key += 1) {
    adjacency[0].push({ from: nodes[0], to: nodes[key], weight: 1 });
  }

  return {
    directed: () => true,
    nodeCount: () => nodes.length,
    nodeByKey: (key) => nodes[key],
    neighbors: (node) => adjacency[node.key!],
  };
}
