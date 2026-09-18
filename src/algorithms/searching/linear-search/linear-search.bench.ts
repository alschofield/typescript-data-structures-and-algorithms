import { bench, describe } from "vitest";
import { LinearSearch } from "./linear-search";

describe("LinearSearch", () => {
  const items = Array.from({ length: 1_000 }, (_, index) => index);
  const equals = (left: number, right: number) => left === right;

  bench("first match", () => LinearSearch(items, 0, equals));
  bench("middle match", () => LinearSearch(items, 500, equals));
  bench("last match", () => LinearSearch(items, 999, equals));
  bench("missing match", () => LinearSearch(items, 1_000, equals));
});
