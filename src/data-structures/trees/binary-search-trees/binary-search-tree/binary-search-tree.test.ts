import { describe, expect, it } from "vitest";
import { BinarySearchTree } from "./binary-search-tree";

describe("Binary Search Tree", () => {
  it("exports the required BinarySearchTree<T> API", () => {
    expect(BinarySearchTree).toBeDefined();
  });

  it.todo("covers constructor(compare), insert(item), find(key), contains(key), remove(key), inOrder(visitor), size, isEmpty");
  it.todo("covers contract edge cases and complexity invariants");
});
