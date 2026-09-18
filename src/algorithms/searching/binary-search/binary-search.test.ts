import { describe, expect, it } from "vitest";
import { BinarySearch } from "./binary-search";

describe("Binary Search", () => {
  it("exports the required BinarySearch API", () => {
    expect(BinarySearch).toBeDefined();
  });

  it("returns boundary and middle matches from sorted input", () => {
    const items = [1, 3, 5, 7, 9];
    const compare = (left: number, right: number) => left - right;
    expect(BinarySearch(items, 1, compare)).toBe(1);
    expect(BinarySearch(items, 5, compare)).toBe(5);
    expect(BinarySearch(items, 9, compare)).toBe(9);
    expect(BinarySearch(items, 4, compare)).toBeUndefined();
    expect(BinarySearch([], 1, compare)).toBeUndefined();
    expect(items).toEqual([1, 3, 5, 7, 9]);
  });

  it("returns a stored object reference using structural comparison", () => {
    const first = { id: 1 };
    const second = { id: 2 };
    const third = { id: 3 };
    const found = BinarySearch([first, second, third], { id: 2 }, (left, right) => left.id - right.id);
    expect(found).toBe(second);
  });

  it("returns one matching duplicate", () => {
    expect(BinarySearch([1, 2, 2, 2, 3], 2, (left, right) => left - right)).toBe(2);
  });
});
