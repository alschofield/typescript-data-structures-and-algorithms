import { describe, expect, it } from "vitest";
import { bubbleSort } from "./bubble-sort";

describe("Bubble Sort", () => {
  it("exports the required bubbleSort<T> API", () => {
    expect(bubbleSort).toBeDefined();
  });

  it.todo("covers bubbleSort(items, compare): boolean | void");
  it.todo("covers contract edge cases and complexity invariants");
});
