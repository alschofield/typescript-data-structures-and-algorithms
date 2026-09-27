import { bench } from "vitest";
import { selectionSort } from "./selection-sort";

const source = Array.from({ length: 1_000 }, (_, index) => (index * 37) % 1_001);
let items: number[];

bench("selectionSort sorts 1,000 numbers", () => { selectionSort(items, (left, right) => left - right); }, {
  setup: () => { items = [...source]; },
});
