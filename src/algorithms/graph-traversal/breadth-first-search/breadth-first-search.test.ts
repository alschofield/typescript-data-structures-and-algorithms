import { describe, expect, it } from "vitest";
import { breadthFirstSearch } from "./breadth-first-search";

describe("Breadth-First Search", () => {
  it("exports the required breadthFirstSearch API", () => {
    expect(breadthFirstSearch).toBeDefined();
  });

  it.todo("covers breadthFirstSearch(graph, source): number[] | undefined");
  it.todo("covers contract edge cases and complexity invariants");
});
