import { describe, expect, it } from "vitest";
import { insertionSort } from "./insertion-sort";

describe("Insertion Sort", () => {
  it("exports the required insertionSort<T> API", () => {
    expect(insertionSort).toBeDefined();
  });

  it.todo("covers insertionSort(items, compare): boolean | void");
  it.todo("covers contract edge cases and complexity invariants");
});
