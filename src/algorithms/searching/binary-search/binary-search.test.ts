import { describe, expect, it } from "vitest";
import { binarySearch } from "./binary-search";

describe("Binary Search", () => {
  it("exports the required binarySearch<T> API", () => {
    expect(binarySearch).toBeDefined();
  });

  it.todo("covers binarySearch(items, key, compare): number | undefined");
  it.todo("covers contract edge cases and complexity invariants");
});
