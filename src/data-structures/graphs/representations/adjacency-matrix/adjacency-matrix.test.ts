import { describe, expect, it } from "vitest";
import { AdjacencyMatrix } from "./adjacency-matrix";

describe("Adjacency Matrix", () => {
  it("exports the required AdjacencyMatrix API", () => {
    expect(AdjacencyMatrix).toBeDefined();
  });

  it.todo("covers constructor(vertexCount, directed), addEdge(from, to), removeEdge(from, to), hasEdge(from, to), neighbors(vertex), vertexCount, edgeCount");
  it.todo("covers contract edge cases and complexity invariants");
});
