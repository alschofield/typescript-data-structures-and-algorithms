import { bench, describe } from "vitest";
import { BinarySearch } from "./binary-search";

describe("BinarySearch", () => {
  const items = Array.from({ length: 1_024 }, (_, index) => index);
  const compare = (left: number, right: number) => left - right;

  bench("first match", () => BinarySearch(items, 0, compare));
  bench("middle match", () => BinarySearch(items, 512, compare));
  bench("last match", () => BinarySearch(items, 1_023, compare));
  bench("missing match", () => BinarySearch(items, 1_024, compare));
});
