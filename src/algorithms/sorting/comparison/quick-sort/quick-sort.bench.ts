import { bench } from "vitest";
import { quickSort } from "./quick-sort";

const source = Array.from({ length: 1_000 }, (_, index) => (index * 37) % 1_001);
let items: number[];

bench("quickSort sorts 1,000 numbers", () => { quickSort(items, (left, right) => left - right); }, {
  setup: () => { items = [...source]; },
});
