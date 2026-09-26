import { bench, describe } from "vitest";
import { AdjacencyMatrix } from "./adjacency-matrix";

describe("AdjacencyMatrix", () => {
  let graph: AdjacencyMatrix<number>;

  bench("addNode 1,000", () => {
    for (let key = 0; key < 1_000; key += 1) graph.addNode(key, key);
  }, { setup: () => { graph = new AdjacencyMatrix<number>(true, compare); } });

  bench("addEdge 999", () => {
    for (let key = 0; key < 999; key += 1) graph.addEdge(key, key + 1, 1);
  }, { setup: () => { graph = graphWithNodes(1_000); } });

  bench("neighbors 1,000-cell row", () => {
    for (const _edge of graph.neighbors(graph.nodeByKey(0)!)) { /* scan and emit populated cells */ }
  }, { setup: () => { graph = graphWithStar(1_000); } });
});

const compare = (left: number | undefined, right: number | undefined) => (left ?? 0) - (right ?? 0);

function graphWithNodes(size: number): AdjacencyMatrix<number> {
  const graph = new AdjacencyMatrix<number>(true, compare);
  for (let key = 0; key < size; key += 1) graph.addNode(key, key);
  return graph;
}

function graphWithStar(size: number): AdjacencyMatrix<number> {
  const graph = graphWithNodes(size);
  for (let key = 1; key < size; key += 1) graph.addEdge(0, key, 1);
  return graph;
}
