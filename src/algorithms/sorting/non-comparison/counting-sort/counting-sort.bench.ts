import { bench } from "vitest";
import { countingSort } from "./counting-sort";

const source = Array.from({ length: 1_000 }, (_, index) => (index * 37) % 1_001);
let items: number[];

bench("countingSort sorts 1,000 numbers", () => { countingSort(items, 1_001); }, {
  setup: () => { items = [...source]; },
});
