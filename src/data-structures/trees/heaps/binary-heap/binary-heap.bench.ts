import { bench, describe } from "vitest";
import { BinaryHeap } from "./binary-heap";

describe("BinaryHeap", () => {
  let heap: BinaryHeap<number>;

  bench("push 1,000", () => {
    for (let index = 1_000; index > 0; index -= 1) heap.push(index);
  }, { setup: () => { heap = new BinaryHeap(compare); } });

  bench("pop 1,000", () => {
    while (!heap.isEmpty()) heap.pop();
  }, { setup: () => { heap = heapOfSize(1_000); } });

  bench("peek", () => { heap.peek(); }, { setup: () => { heap = heapOfSize(1_000); } });
});

const compare = (left: number | undefined, right: number | undefined) => (left ?? 0) - (right ?? 0);

function heapOfSize(size: number): BinaryHeap<number> {
  const heap = new BinaryHeap(compare);
  for (let index = size; index > 0; index -= 1) heap.push(index);
  return heap;
}
