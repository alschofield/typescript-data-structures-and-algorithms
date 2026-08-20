import { describe, expect, it } from "vitest";
import { BinaryHeap } from "./binary-heap";

describe("Binary Heap", () => {
  it("exports the required BinaryHeap<T> API", () => {
    expect(BinaryHeap).toBeDefined();
  });

  it.todo("covers constructor(compare), push(item), pop(), peek(), size, isEmpty");
  it.todo("covers contract edge cases and complexity invariants");
});
