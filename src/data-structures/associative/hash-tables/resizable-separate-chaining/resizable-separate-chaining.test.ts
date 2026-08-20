import { describe, expect, it } from "vitest";
import { ResizableHashTable } from "./resizable-separate-chaining";

describe("Resizable Separate-Chaining Hash Table", () => {
  it("exports the required ResizableHashTable<K, V> API", () => {
    expect(ResizableHashTable).toBeDefined();
  });

  it.todo("covers constructor(hash, equals), set(key, value), get(key), remove(key), contains(key), size, capacity, isEmpty");
  it.todo("covers contract edge cases and complexity invariants");
});
