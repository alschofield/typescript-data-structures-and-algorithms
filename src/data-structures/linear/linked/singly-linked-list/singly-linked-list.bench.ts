import { bench, describe } from "vitest";
import { SinglyLinkedList } from "./singly-linked-list";

describe("SinglyLinkedList", () => {
  let list: SinglyLinkedList<number>;

  bench("pushFront 1,000", () => {
    for (let index = 0; index < 1_000; index += 1) list.pushFront(index);
  }, { setup: () => { list = new SinglyLinkedList<number>(); } });

  bench("pushBack 1,000", () => {
    for (let index = 0; index < 1_000; index += 1) list.pushBack(index);
  }, { setup: () => { list = new SinglyLinkedList<number>(); } });

  bench("get middle", () => {
    for (let index = 0; index < 1_000; index += 1) list.get(500);
  }, { setup: () => { list = listOfSize(1_000); } });

  bench("popBack 1,000", () => {
    while (!list.isEmpty()) list.popBack();
  }, { setup: () => { list = listOfSize(1_000); } });
});

function listOfSize(size: number): SinglyLinkedList<number> {
  const list = new SinglyLinkedList<number>();
  for (let index = 0; index < size; index += 1) list.pushFront(index);
  return list;
}
