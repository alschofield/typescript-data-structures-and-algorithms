import { bench, describe } from "vitest";
import { Queue } from "./queue";

describe("Queue", () => {
  let queue: Queue<number>;

  bench("enqueue 1,000", () => {
    for (let index = 0; index < 1_000; index += 1) queue.enqueue(index);
  }, { setup: () => { queue = new Queue<number>(); } });

  bench("dequeue 1,000", () => {
    while (!queue.isEmpty()) queue.dequeue();
  }, { setup: () => { queue = queueOfSize(1_000); } });

  bench("peek", () => {
    for (let index = 0; index < 1_000; index += 1) queue.peek();
  }, { setup: () => { queue = queueOfSize(1); } });
});

function queueOfSize(size: number): Queue<number> {
  const queue = new Queue<number>();
  for (let index = 0; index < size; index += 1) queue.enqueue(index);
  return queue;
}
