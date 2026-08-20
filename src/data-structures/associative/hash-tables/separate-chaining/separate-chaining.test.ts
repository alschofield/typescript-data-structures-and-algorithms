import { describe, expect, it } from "vitest";
import { HashTable } from "./separate-chaining";

describe("Separate-Chaining Hash Table", () => {
  it("exports the required HashTable<K, V> API", () => {
    expect(HashTable).toBeDefined();
  });

  it.todo("covers constructor(hash, equals), set(key, value), get(key), remove(key), contains(key), size, isEmpty");
  it.todo("covers contract edge cases and complexity invariants");
});
