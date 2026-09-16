import { bench, describe } from "vitest";
import { Stack } from "./stack";

describe("Stack", () => {
  bench("push", () => {
    const stack = new Stack<number>();
    for (let index = 0; index < 1_000; index += 1) stack.push(index);
  });

  bench("pop", () => {
    const stack = new Stack<number>();
    for (let index = 0; index < 1_000; index += 1) stack.push(index);
    while (!stack.isEmpty()) stack.pop();
  });

  bench("peek", () => {
    const stack = new Stack<number>();
    stack.push(1);
    for (let index = 0; index < 1_000; index += 1) stack.peek();
  });
});
