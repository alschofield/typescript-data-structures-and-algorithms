import { bench, describe } from "vitest";
import { Queue } from "./queue";

describe("Queue", () => {
  bench("enqueue", () => {
    const queue = new Queue<number>();
    for (let index = 0; index < 1_000; index += 1) queue.enqueue(index);
  });

  bench("dequeue", () => {
    const queue = new Queue<number>();
    for (let index = 0; index < 1_000; index += 1) queue.enqueue(index);
    while (!queue.isEmpty()) queue.dequeue();
  });

  bench("peek", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    for (let index = 0; index < 1_000; index += 1) queue.peek();
  });
});
