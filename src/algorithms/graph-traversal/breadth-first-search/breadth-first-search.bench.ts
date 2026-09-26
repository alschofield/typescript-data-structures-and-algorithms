import { bench, describe } from "vitest";
import { AdjacencyList } from "@ds/graphs/representations/adjacency-list/adjacency-list";
import { breadthFirstSearch } from "./breadth-first-search";

describe("breadthFirstSearch", () => {
  let graph: AdjacencyList<number, number>;

  bench("traverse 1,000-node chain", () => { breadthFirstSearch(graph, 0, () => true); }, {
    setup: () => { graph = chainGraph(1_000); },
  });

  bench("stop after first visit", () => { breadthFirstSearch(graph, 0, () => false); }, {
    setup: () => { graph = chainGraph(1_000); },
  });
});

function chainGraph(size: number): AdjacencyList<number, number> {
  const graph = new AdjacencyList<number, number>(true, (left, right) => (left ?? 0) - (right ?? 0));
  for (let key = 0; key < size; key += 1) graph.addNode(key, key);
  for (let key = 0; key < size - 1; key += 1) graph.addEdge(key, key + 1, 1);
  return graph;
}
