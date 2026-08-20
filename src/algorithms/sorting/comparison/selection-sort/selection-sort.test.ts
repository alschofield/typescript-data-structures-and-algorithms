import { describe, expect, it } from "vitest";
import { selectionSort } from "./selection-sort";

describe("Selection Sort", () => {
  it("exports the required selectionSort<T> API", () => {
    expect(selectionSort).toBeDefined();
  });

  it.todo("covers selectionSort(items, compare): boolean | void");
  it.todo("covers contract edge cases and complexity invariants");
});
