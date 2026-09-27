import { bench } from "vitest";
import { insertionSort } from "./insertion-sort";

const source = Array.from({ length: 1_000 }, (_, index) => (index * 37) % 1_001);
let items: number[];

bench("insertionSort sorts 1,000 numbers", () => { insertionSort(items, (left, right) => left - right); }, {
  setup: () => { items = [...source]; },
});
