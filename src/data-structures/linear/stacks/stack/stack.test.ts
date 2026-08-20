import { describe, expect, it } from "vitest";
import { Stack } from "./stack";

describe("Stack", () => {
  it("exports the required Stack<T> API", () => {
    expect(Stack).toBeDefined();
  });

  it.todo("covers push(item), pop(), peek(), size, isEmpty");
  it.todo("covers contract edge cases and complexity invariants");
});
