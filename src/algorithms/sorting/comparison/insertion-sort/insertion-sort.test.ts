import { describe, expect, it } from "vitest";
import { insertionSort } from "./insertion-sort";

describe("Insertion Sort", () => {
  it("exports the required insertionSort<T> API", () => {
    expect(insertionSort).toBeDefined();
  });

  it("sorts in place using the supplied comparator", () => {
    const items = [5, 1, 4, 2, 3];
    expect(insertionSort(items, (left, right) => left - right)).toBe(true);
    expect(items).toEqual([1, 2, 3, 4, 5]);
  });

  it("preserves object references for equal comparator values", () => {
    const first = { rank: 1 };
    const items = [{ rank: 2 }, first, { rank: 1 }];
    insertionSort(items, (left, right) => left.rank - right.rank);
    expect(items[0]).toBe(first);
  });
});
