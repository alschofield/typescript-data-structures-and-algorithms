import { describe, expect, it } from "vitest";
import { HashTable } from "./separate-chaining";

describe("Separate-Chaining Hash Table", () => {
  it("exports the required HashTable<K, V> API", () => {
    expect(HashTable).toBeDefined();
  });

  it.todo("covers constructor(initialCapacity, hash, equals), set(key, value), setResizing(key, value), get(key), remove(key), contains(key), size, capacity, isEmpty");
  it.todo("rejects zero capacity; keeps set capacity fixed; doubles and rehashes before setResizing exceeds 0.75 load");
});
