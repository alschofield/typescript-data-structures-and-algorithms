import { describe, expect, it } from "vitest";
import { Queue } from "./queue";

describe("Queue", () => {
  it("exports the required Queue<T> API", () => {
    expect(Queue).toBeDefined();
  });

  it("preserves FIFO order without mutating peek", () => {
    const queue = new Queue<string>();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.enqueue("first")).toBe(true);
    expect(queue.enqueue("last")).toBe(true);
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe("first");
    expect(queue.size()).toBe(2);
    expect(queue.dequeue()).toBe("first");
    expect(queue.dequeue()).toBe("last");
    expect(queue.isEmpty()).toBe(true);
  });

  it("returns undefined from empty front operations and preserves references", () => {
    const value = { id: 1 };
    const queue = new Queue<typeof value>();
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.peek()).toBeUndefined();
    queue.enqueue(value);
    expect(queue.peek()).toBe(value);
    expect(queue.dequeue()).toBe(value);
  });
});
