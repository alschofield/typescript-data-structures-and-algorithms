import { describe, expect, it } from "vitest";
import { heapSort } from "./heap-sort";

describe("Heap Sort", () => {
  it("exports the required heapSort<T> API", () => {
    expect(heapSort).toBeDefined();
  });

  it.todo("covers heapSort(items, compare): boolean | void");
  it.todo("covers contract edge cases and complexity invariants");
});
