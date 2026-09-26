import { describe, expect, it } from "vitest";
import { heapSort } from "./heap-sort";

describe("Heap Sort", () => {
  it("exports the required heapSort<T> API", () => {
    expect(heapSort).toBeDefined();
  });

  it("sorts in place using the supplied comparator", () => {
    const items = [5, 1, 4, 2, 3];
    expect(heapSort(items, (left, right) => left - right)).toBe(true);
    expect(items).toEqual([1, 2, 3, 4, 5]);
  });

  it("sorts structural values without replacing their references", () => {
    const first = { rank: 1 };
    const items = [{ rank: 3 }, first, { rank: 2 }];
    heapSort(items, (left, right) => left.rank - right.rank);
    expect(items).toEqual([first, { rank: 2 }, { rank: 3 }]);
  });
});
