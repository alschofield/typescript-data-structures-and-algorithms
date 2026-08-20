import { describe, expect, it } from "vitest";
import { dijkstra } from "./dijkstra";

describe("Dijkstra", () => {
  it("exports the required dijkstra API", () => {
    expect(dijkstra).toBeDefined();
  });

  it.todo("covers dijkstra(graph, source): { distances, parents } | undefined");
  it.todo("covers contract edge cases and complexity invariants");
});
