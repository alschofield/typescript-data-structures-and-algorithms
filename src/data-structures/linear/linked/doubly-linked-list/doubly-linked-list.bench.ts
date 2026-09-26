import { bench, describe } from "vitest";
import { DoublyLinkedList } from "./doubly-linked-list";

describe("DoublyLinkedList", () => {
  let list: DoublyLinkedList<number>;

  bench("pushFront 1,000", () => {
    for (let index = 0; index < 1_000; index += 1) list.pushFront(index);
  }, { setup: () => { list = new DoublyLinkedList<number>(); } });

  bench("pushBack 1,000", () => {
    for (let index = 0; index < 1_000; index += 1) list.pushBack(index);
  }, { setup: () => { list = new DoublyLinkedList<number>(); } });

  bench("get middle", () => {
    for (let index = 0; index < 1_000; index += 1) list.get(500);
  }, { setup: () => { list = listOfSize(1_000); } });

  bench("popBack 1,000", () => {
    while (!list.isEmpty()) list.popBack();
  }, { setup: () => { list = listOfSize(1_000); } });
});

function listOfSize(size: number): DoublyLinkedList<number> {
  const list = new DoublyLinkedList<number>();
  for (let index = 0; index < size; index += 1) list.pushBack(index);
  return list;
}
