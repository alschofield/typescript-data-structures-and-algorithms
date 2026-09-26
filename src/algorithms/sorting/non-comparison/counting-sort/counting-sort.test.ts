import { describe, expect, it } from "vitest";
import { countingSort } from "./counting-sort";

describe("Counting Sort", () => {
  it("exports the required countingSort API", () => {
    expect(countingSort).toBeDefined();
  });

  it("sorts non-negative safe integers in place", () => {
    const items = [3, 0, 2, 3, 1];
    expect(countingSort(items, 4)).toBe(true);
    expect(items).toEqual([0, 1, 2, 3, 3]);
  });

  it("rejects invalid limits and keys without mutating the input", () => {
    const negative = [2, -1];
    expect(countingSort(negative, 3)).toBe(false);
    expect(negative).toEqual([2, -1]);
    expect(countingSort([1], 1)).toBe(false);
  });
});
