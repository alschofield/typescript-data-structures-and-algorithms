import { bench, describe } from "vitest";
import { SinglyLinkedList } from "./singly-linked-list";

describe("SinglyLinkedList", () => {
  bench("pushFront", () => {
    const list = new SinglyLinkedList<number>();
    for (let index = 0; index < 1_000; index += 1) list.pushFront(index);
  });

  bench("pushBack", () => {
    const list = new SinglyLinkedList<number>();
    for (let index = 0; index < 1_000; index += 1) list.pushBack(index);
  });

  bench("get middle", () => {
    const list = listOfSize(1_000);
    for (let index = 0; index < 1_000; index += 1) list.get(500);
  });

  bench("popBack", () => {
    const list = listOfSize(1_000);
    while (!list.isEmpty()) list.popBack();
  });
});

function listOfSize(size: number): SinglyLinkedList<number> {
  const list = new SinglyLinkedList<number>();
  for (let index = 0; index < size; index += 1) list.pushFront(index);
  return list;
}
