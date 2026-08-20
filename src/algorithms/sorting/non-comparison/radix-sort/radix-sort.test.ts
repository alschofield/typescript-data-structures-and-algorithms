import { describe, expect, it } from "vitest";
import { radixSort } from "./radix-sort";

describe("Radix Sort", () => {
  it("exports the required radixSort API", () => {
    expect(radixSort).toBeDefined();
  });

  it.todo("covers radixSort(items): boolean | void");
  it.todo("covers contract edge cases and complexity invariants");
});
