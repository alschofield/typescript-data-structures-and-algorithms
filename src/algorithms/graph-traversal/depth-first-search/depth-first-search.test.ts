import { describe, expect, it } from "vitest";
import { depthFirstSearch } from "./depth-first-search";

describe("Depth-First Search", () => {
  it("exports the required depthFirstSearch API", () => {
    expect(depthFirstSearch).toBeDefined();
  });

  it.todo("covers depthFirstSearch(graph, source): number[] | undefined");
  it.todo("covers contract edge cases and complexity invariants");
});
