import { bench, describe } from "vitest";
import { AdjacencyList } from "./adjacency-list";

describe("AdjacencyList", () => {
  let graph: AdjacencyList<number, number>;

  bench("addNode 1,000", () => {
    for (let key = 0; key < 1_000; key += 1) graph.addNode(key, key);
  }, { setup: () => { graph = new AdjacencyList(true, compare); } });

  bench("addEdge 999", () => {
    for (let key = 0; key < 999; key += 1) graph.addEdge(key, key + 1, 1);
  }, { setup: () => { graph = graphWithNodes(1_000); } });

  bench("neighbors 1,000-edge source", () => {
    for (const _edge of graph.neighbors(graph.nodeByKey(0)!)) { /* iterate all outgoing edges */ }
  }, { setup: () => { graph = graphWithStar(1_000); } });
});

const compare = (left: number | undefined, right: number | undefined) => (left ?? 0) - (right ?? 0);

function graphWithNodes(size: number): AdjacencyList<number, number> {
  const graph = new AdjacencyList<number, number>(true, compare);
  for (let key = 0; key < size; key += 1) graph.addNode(key, key);
  return graph;
}

function graphWithStar(size: number): AdjacencyList<number, number> {
  const graph = graphWithNodes(size);
  for (let key = 1; key < size; key += 1) graph.addEdge(0, key, 1);
  return graph;
}
