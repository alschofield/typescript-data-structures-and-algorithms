import { describe, expect, it } from "vitest";
import { AdjacencyList } from "./adjacency-list";

describe("Adjacency List", () => {
  it("exports the required AdjacencyList API", () => {
    expect(AdjacencyList).toBeDefined();
  });

  it.todo("covers constructor(vertexCount, directed), addEdge(from, to), hasEdge(from, to), neighbors(vertex), vertexCount, edgeCount");
  it.todo("covers contract edge cases and complexity invariants");
});
