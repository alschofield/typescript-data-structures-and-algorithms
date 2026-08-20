import { describe, expect, it } from "vitest";
import { linearSearch } from "./linear-search";

describe("Linear Search", () => {
  it("exports the required linearSearch<T> API", () => {
    expect(linearSearch).toBeDefined();
  });

  it.todo("covers linearSearch(items, key, compare): number | undefined");
  it.todo("covers contract edge cases and complexity invariants");
});
