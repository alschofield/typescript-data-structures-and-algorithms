import { bench } from "vitest";
import { bubbleSort } from "./bubble-sort";

const source = Array.from({ length: 1_000 }, (_, index) => (index * 37) % 1_001);
let items: number[];

bench("bubbleSort sorts 1,000 numbers", () => { bubbleSort(items, (left, right) => left - right); }, {
  setup: () => { items = [...source]; },
});
