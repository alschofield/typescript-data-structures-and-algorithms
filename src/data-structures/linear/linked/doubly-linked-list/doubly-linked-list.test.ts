import { describe, expect, it } from "vitest";
import { DoublyLinkedList } from "./doubly-linked-list";

describe("Doubly Linked List", () => {
  it("exports the required DoublyLinkedList<T> API", () => {
    expect(DoublyLinkedList).toBeDefined();
  });

  it("maintains both link directions through end insertions and removals", () => {
    const list = new DoublyLinkedList<string>();
    list.pushFront("middle");
    list.pushFront("first");
    list.pushBack("last");

    expect(list.size()).toBe(3);
    expect(list.head?.value).toBe("first");
    expect(list.tail?.value).toBe("last");
    expect(list.head?.prev).toBeUndefined();
    expect(list.head?.next?.value).toBe("middle");
    expect(list.head?.next?.prev).toBe(list.head);
    expect(list.tail?.prev?.value).toBe("middle");
    expect(list.tail?.next).toBeUndefined();

    expect(list.popFront()?.value).toBe("first");
    expect(list.head?.prev).toBeUndefined();
    expect(list.popBack()?.value).toBe("last");
    expect(list.tail?.next).toBeUndefined();
    expect(list.popBack()?.value).toBe("middle");
    expect(list.isEmpty()).toBe(true);
    expect(list.size()).toBe(0);
  });

  it("inserts and removes at interior indexes", () => {
    const list = new DoublyLinkedList<number>();
    list.pushBack(1);
    list.pushBack(3);
    expect(list.insert(1, 2)).toBe(true);
    expect([list.get(0)?.value, list.get(1)?.value, list.get(2)?.value]).toEqual([1, 2, 3]);
    expect(list.get(1)?.prev?.value).toBe(1);
    expect(list.get(1)?.next?.value).toBe(3);
    expect(list.remove(1)?.value).toBe(2);
    expect([list.get(0)?.value, list.get(1)?.value]).toEqual([1, 3]);
    expect(list.get(1)?.prev?.value).toBe(1);
    expect(list.size()).toBe(2);
  });

  it("handles empty, singleton, and invalid-index operations", () => {
    const list = new DoublyLinkedList<{ id: number }>();
    expect(list.popFront()).toBeUndefined();
    expect(list.popBack()).toBeUndefined();
    const value = { id: 1 };
    list.pushBack(value);
    expect(list.get(0)?.value).toBe(value);
    expect(list.popFront()?.value).toBe(value);
    expect(list.isEmpty()).toBe(true);

    list.pushBack(value);
    expect(list.get(-1)).toBeUndefined();
    expect(list.get(1)).toBeUndefined();
    expect(list.insert(-1, value)).toBe(false);
    expect(list.insert(2, value)).toBe(false);
    expect(list.remove(-1)).toBeUndefined();
    expect(list.remove(1)).toBeUndefined();
  });
});
