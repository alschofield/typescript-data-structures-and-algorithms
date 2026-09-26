import { bench, describe } from "vitest";
import { Stack } from "./stack";

describe("Stack", () => {
  let stack: Stack<number>;

  bench("push 1,000", () => {
    for (let index = 0; index < 1_000; index += 1) stack.push(index);
  }, { setup: () => { stack = new Stack<number>(); } });

  bench("pop 1,000", () => {
    while (!stack.isEmpty()) stack.pop();
  }, { setup: () => { stack = stackOfSize(1_000); } });

  bench("peek", () => {
    for (let index = 0; index < 1_000; index += 1) stack.peek();
  }, { setup: () => { stack = stackOfSize(1); } });
});

function stackOfSize(size: number): Stack<number> {
  const stack = new Stack<number>();
  for (let index = 0; index < size; index += 1) stack.push(index);
  return stack;
}
