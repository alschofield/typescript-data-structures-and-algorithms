import { describe, expect, it } from "vitest";
import { selectionSort } from "./selection-sort";

describe("Selection Sort", () => {
  it("exports the required selectionSort<T> API", () => {
    expect(selectionSort).toBeDefined();
  });

  it("sorts in place using the supplied comparator", () => {
    const items = [5, 1, 4, 2, 3];
    expect(selectionSort(items, (left, right) => left - right)).toBe(true);
    expect(items).toEqual([1, 2, 3, 4, 5]);
  });

  it("accepts descending comparator order", () => {
    const items = [1, 3, 2];
    selectionSort(items, (left, right) => right - left);
    expect(items).toEqual([3, 2, 1]);
  });
});
