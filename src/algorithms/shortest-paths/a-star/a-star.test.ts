import { describe, expect, it } from "vitest";
import { aStar } from "./a-star";

describe("A-Star", () => {
  it("exports the required aStar API", () => {
    expect(aStar).toBeDefined();
  });

  it.todo("covers aStar(graph, source, goal, heuristic): number[] | undefined");
  it.todo("covers contract edge cases and complexity invariants");
});
