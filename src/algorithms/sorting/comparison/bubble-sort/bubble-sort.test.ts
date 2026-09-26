import { describe, expect, it } from "vitest";
import { bubbleSort } from "./bubble-sort";

describe("Bubble Sort", () => {
  it("exports the required bubbleSort<T> API", () => {
    expect(bubbleSort).toBeDefined();
  });

  it("sorts in place using the supplied comparator", () => {
    const items = [5, 1, 4, 2, 3];
    expect(bubbleSort(items, (left, right) => left - right)).toBe(true);
    expect(items).toEqual([1, 2, 3, 4, 5]);
  });

  it("preserves object references for equal comparator values", () => {
    const first = { rank: 1 };
    const items = [{ rank: 2 }, first, { rank: 1 }];
    bubbleSort(items, (left, right) => left.rank - right.rank);
    expect(items[0]).toBe(first);
  });
});
