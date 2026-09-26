import { describe, expect, it } from "vitest";
import { BinaryHeap } from "./binary-heap";

describe("Binary Heap", () => {
  it("exports the required BinaryHeap<T> API", () => {
    expect(BinaryHeap).toBeDefined();
  });

  it("returns values in comparator priority order", () => {
    const heap = new BinaryHeap<number>((left, right) => left! - right!);
    [4, 1, 3, 2].forEach((value) => heap.push(value));

    expect(heap.peek()?.value).toBe(1);
    expect(heap.size()).toBe(4);
    expect([heap.pop()?.value, heap.pop()?.value, heap.pop()?.value, heap.pop()?.value]).toEqual([1, 2, 3, 4]);
    expect(heap.isEmpty()).toBe(true);
  });

  it("handles empty and singleton heaps without reading missing children", () => {
    const heap = new BinaryHeap<number>((left, right) => left! - right!);
    expect(heap.pop()).toBeUndefined();
    heap.push(5);
    expect(heap.pop()?.value).toBe(5);
    expect(heap.pop()).toBeUndefined();
  });
});
