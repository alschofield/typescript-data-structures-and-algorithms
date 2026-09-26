import { describe, expect, it } from "vitest";
import { quickSort } from "./quick-sort";

describe("Quick Sort", () => {
  it("exports the required quickSort<T> API", () => {
    expect(quickSort).toBeDefined();
  });

  it("sorts in place using the supplied comparator", () => {
    const items = [5, 1, 4, 2, 3];
    expect(quickSort(items, (left, right) => left - right)).toBe(true);
    expect(items).toEqual([1, 2, 3, 4, 5]);
  });

  it("terminates on duplicate-heavy input", () => {
    const items = [2, 1, 2, 2, 1];
    quickSort(items, (left, right) => left - right);
    expect(items).toEqual([1, 1, 2, 2, 2]);
  });
});
