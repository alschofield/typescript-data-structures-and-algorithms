import { describe, expect, it } from "vitest";
import { radixSort } from "./radix-sort";

describe("Radix Sort", () => {
  it("exports the required radixSort API", () => {
    expect(radixSort).toBeDefined();
  });

  it("sorts unsigned 32-bit integers in place", () => {
    const items = [256, 0, 4_294_967_295, 1, 65_536];
    expect(radixSort(items)).toBe(true);
    expect(items).toEqual([0, 1, 256, 65_536, 4_294_967_295]);
  });

  it("rejects signed, fractional, and oversized values without mutation", () => {
    const negative = [2, -1];
    expect(radixSort(negative)).toBe(false);
    expect(negative).toEqual([2, -1]);
    expect(radixSort([1.5])).toBe(false);
    expect(radixSort([4_294_967_296])).toBe(false);
  });
});
