import { describe, expect, it } from "vitest";
import { UnionFind } from "./union-find";

describe("Union-Find", () => {
  it("exports the required UnionFind API", () => {
    expect(UnionFind).toBeDefined();
  });

  it.todo("covers constructor(elementCount), find(element), union(a, b), connected(a, b), setCount");
  it.todo("covers contract edge cases and complexity invariants");
});
