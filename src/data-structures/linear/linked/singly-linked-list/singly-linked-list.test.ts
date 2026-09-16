import { describe, expect, it } from "vitest";
import { SinglyLinkedList } from "./singly-linked-list";

describe("Singly Linked List", () => {
  it("exports the required SinglyLinkedList<T> API", () => {
    expect(SinglyLinkedList).toBeDefined();
  });

  it("maintains front-to-back order through insertion and removal", () => {
    const list = new SinglyLinkedList<string>();
    expect(list.isEmpty()).toBe(true);
    list.pushFront("first");
    list.pushBack("last");
    expect(list.size()).toBe(2);
    expect(list.get(0)?.value).toBe("first");
    expect(list.get(1)?.value).toBe("last");

    expect(list.insert(1, "middle")).toBe(true);
    expect(list.size()).toBe(3);
    expect(list.get(0)?.value).toBe("first");
    expect(list.get(1)?.value).toBe("middle");
    expect(list.get(2)?.value).toBe("last");
    expect(list.remove(1)?.value).toBe("middle");
    expect(list.size()).toBe(2);
    expect(list.get(1)?.value).toBe("last");
  });

  it("handles empty and singleton transitions", () => {
    const list = new SinglyLinkedList<{ id: number }>();
    expect(list.popFront()).toBeUndefined();
    expect(list.popBack()).toBeUndefined();
    expect(list.size()).toBe(0);

    const value = { id: 1 };
    list.pushBack(value);
    expect(list.get(0)?.value).toBe(value);
    expect(list.popFront()?.value).toBe(value);
    expect(list.isEmpty()).toBe(true);
    expect(list.size()).toBe(0);
  });

  it("rejects indexes outside the list bounds", () => {
    const list = new SinglyLinkedList<number>();
    list.pushBack(1);
    expect(list.get(-1)).toBeUndefined();
    expect(list.get(1)).toBeUndefined();
    expect(list.insert(-1, 0)).toBe(false);
    expect(list.insert(2, 2)).toBe(false);
    expect(list.remove(-1)).toBeUndefined();
    expect(list.remove(1)).toBeUndefined();
    expect(list.size()).toBe(1);
  });
});
