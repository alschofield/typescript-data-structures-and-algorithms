import { bench } from "vitest";
import { mergeSort } from "./merge-sort";

const source = Array.from({ length: 1_000 }, (_, index) => (index * 37) % 1_001);
let items: number[];

bench("mergeSort sorts 1,000 numbers", () => { mergeSort(items, (left, right) => left - right); }, {
  setup: () => { items = [...source]; },
});
