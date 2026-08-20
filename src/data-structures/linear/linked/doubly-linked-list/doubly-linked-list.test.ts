import { describe, expect, it } from "vitest";
import { DoublyLinkedList } from "./doubly-linked-list";

describe("Doubly Linked List", () => {
  it("exports the required DoublyLinkedList<T> API", () => {
    expect(DoublyLinkedList).toBeDefined();
  });

  it.todo("covers pushFront(item), pushBack(item), popFront(), popBack(), get(index), insert(index, item), remove(index), size, isEmpty");
  it.todo("covers contract edge cases and complexity invariants");
});
