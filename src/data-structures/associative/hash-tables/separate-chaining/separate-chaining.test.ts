import { describe, expect, it } from "vitest";
import { HashTable } from "./separate-chaining";

describe("Separate-Chaining Hash Table", () => {
  it("exports the required HashTable<K, V> API", () => {
    expect(HashTable).toBeDefined();
  });

  it("handles collisions, replacement, removal, and negative integer hashes", () => {
    const table = new HashTable<string, number>(3, (key) => key?.length === 1 ? -1 : 2, (left, right) => left === right);
    table.set("a", 1);
    table.set("b", 2);
    table.set("long", 3);
    expect(table.size()).toBe(3);
    expect(table.get("a")).toBe(1);
    expect(table.get("b")).toBe(2);
    expect(table.contains("long")).toBe(true);
    table.set("a", 10);
    expect(table.size()).toBe(3);
    expect(table.get("a")).toBe(10);
    expect(table.remove("b")?.value).toBe(2);
    expect(table.contains("b")).toBe(false);
    expect(table.size()).toBe(2);
  });

  it("keeps set capacity fixed and rehashes setResize entries", () => {
    const table = new HashTable<string, number>(4, (key) => key?.charCodeAt(0) ?? 0, (left, right) => left === right);
    table.set("a", 1);
    table.set("b", 2);
    expect(table.capacity()).toBe(4);
    table.setResize("c", 3);
    expect(table.capacity()).toBe(4);
    table.setResize("d", 4);
    expect(table.capacity()).toBe(8);
    expect(["a", "b", "c", "d"].map((key) => table.get(key))).toEqual([1, 2, 3, 4]);
  });

  it("rejects invalid capacity and non-integer hash results", () => {
    expect(() => new HashTable(0, () => 0, () => true)).toThrow(RangeError);
    const table = new HashTable<string, number>(2, () => 1.5, (left, right) => left === right);
    expect(() => table.set("invalid", 1)).toThrow(RangeError);
  });
});
