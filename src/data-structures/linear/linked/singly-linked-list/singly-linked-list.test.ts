import { describe, expect, it } from "vitest";
import { SinglyLinkedList } from "./singly-linked-list";

describe("Singly Linked List", () => {
  it("exports the required SinglyLinkedList<T> API", () => {
    expect(SinglyLinkedList).toBeDefined();
  });

  it.todo("covers pushFront(item), pushBack(item), popFront(), popBack(), get(index), insert(index, item), remove(index), size, isEmpty");
  it.todo("covers contract edge cases and complexity invariants");
});
