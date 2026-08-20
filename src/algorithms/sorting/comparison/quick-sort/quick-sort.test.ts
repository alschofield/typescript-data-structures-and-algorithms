import { describe, expect, it } from "vitest";
import { quickSort } from "./quick-sort";

describe("Quick Sort", () => {
  it("exports the required quickSort<T> API", () => {
    expect(quickSort).toBeDefined();
  });

  it.todo("covers quickSort(items, compare): boolean | void");
  it.todo("covers contract edge cases and complexity invariants");
});
