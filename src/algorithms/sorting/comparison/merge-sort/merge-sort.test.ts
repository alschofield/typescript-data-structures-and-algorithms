import { describe, expect, it } from "vitest";
import { mergeSort } from "./merge-sort";

describe("Merge Sort", () => {
  it("exports the required mergeSort<T> API", () => {
    expect(mergeSort).toBeDefined();
  });

  it.todo("covers mergeSort(items, compare): boolean | void");
  it.todo("covers contract edge cases and complexity invariants");
});
