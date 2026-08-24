import { describe, expect, it } from "vitest";
import { AdjacencyMatrix } from "./adjacency-matrix";

describe("Adjacency Matrix", () => {
  it("exports the required AdjacencyMatrix API", () => {
    expect(AdjacencyMatrix).toBeDefined();
  });

  it.todo("covers create(directed), addNode(value), stable dense indexes, handle-based weighted edges, and GraphView index adaptation");
  it.todo("covers contract edge cases and complexity invariants");
});
