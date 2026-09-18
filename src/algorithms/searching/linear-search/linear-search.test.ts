import { describe, expect, it } from "vitest";
import { LinearSearch } from "./linear-search";

describe("Linear Search", () => {
  it("exports the required LinearSearch API", () => {
    expect(LinearSearch).toBeDefined();
  });

  it("returns the first matching item from an unsorted input", () => {
    const items = [7, 3, 7, 1];
    expect(LinearSearch(items, 7, (left, right) => left === right)).toBe(7);
    expect(LinearSearch(items, 3, (left, right) => left === right)).toBe(3);
    expect(LinearSearch(items, 99, (left, right) => left === right)).toBeUndefined();
    expect(items).toEqual([7, 3, 7, 1]);
  });

  it("uses the caller comparison for structural object matching", () => {
    const first = { id: 1, label: "first" };
    const second = { id: 2, label: "second" };
    const items = [first, second];
    const found = LinearSearch(items, { id: 2, label: "ignored" }, (left, right) => left.id === right.id);
    expect(found).toBe(second);
  });

  it("returns undefined for empty input", () => {
    expect(LinearSearch([], "target", (left, right) => left === right)).toBeUndefined();
  });
});
