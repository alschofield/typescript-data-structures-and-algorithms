import { describe, expect, it } from "vitest";
import { UnionFind } from "./union-find";

describe("Union-Find", () => {
  it("exports the required UnionFind API", () => {
    expect(UnionFind).toBeDefined();
  });

  it("connects components transitively and reports repeated unions", () => {
    const sets = new UnionFind(4);
    expect(sets.union(0, 1)).toBe(true);
    expect(sets.union(1, 2)).toBe(true);
    expect(sets.connected(0, 2)).toBe(true);
    expect(sets.connected(0, 3)).toBe(false);
    expect(sets.union(0, 2)).toBe(false);
    expect(sets.find(0)).toBe(sets.find(2));
  });

  it("grows the element range without invalidating existing components", () => {
    const sets = new UnionFind(2);
    sets.union(0, 1);
    expect(sets.setCount(4)).toBe(true);
    expect(sets.size()).toBe(4);
    expect(sets.connected(0, 1)).toBe(true);
    expect(sets.connected(2, 3)).toBe(false);
    expect(sets.setCount(3)).toBe(false);
    expect(() => sets.find(4)).toThrow(RangeError);
  });

  it("rejects invalid capacities and indexes", () => {
    expect(() => new UnionFind(-1)).toThrow(RangeError);
    expect(() => new UnionFind(1).connected(0, 1)).toThrow(RangeError);
  });
});
