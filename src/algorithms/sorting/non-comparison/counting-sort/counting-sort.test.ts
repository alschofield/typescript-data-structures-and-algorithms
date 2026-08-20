import { describe, expect, it } from "vitest";
import { countingSort } from "./counting-sort";

describe("Counting Sort", () => {
  it("exports the required countingSort API", () => {
    expect(countingSort).toBeDefined();
  });

  it.todo("covers countingSort(items, keyLimit): boolean | void");
  it.todo("covers contract edge cases and complexity invariants");
});
