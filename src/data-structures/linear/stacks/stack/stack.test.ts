import { describe, expect, it } from "vitest";
import { Stack } from "./stack";

describe("Stack", () => {
  it("exports the required Stack<T> API", () => {
    expect(Stack).toBeDefined();
  });

  it("preserves LIFO order without mutating peek", () => {
    const stack = new Stack<string>();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.push("first")).toBe(true);
    expect(stack.push("last")).toBe(true);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe("last");
    expect(stack.size()).toBe(2);
    expect(stack.pop()).toBe("last");
    expect(stack.pop()).toBe("first");
    expect(stack.isEmpty()).toBe(true);
  });

  it("returns undefined from empty top operations and preserves references", () => {
    const value = { id: 1 };
    const stack = new Stack<typeof value>();
    expect(stack.pop()).toBeUndefined();
    expect(stack.peek()).toBeUndefined();
    stack.push(value);
    expect(stack.peek()).toBe(value);
    expect(stack.pop()).toBe(value);
  });
});
