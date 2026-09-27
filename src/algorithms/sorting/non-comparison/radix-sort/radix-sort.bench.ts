import { bench } from "vitest";
import { radixSort } from "./radix-sort";

const source = Array.from({ length: 1_000 }, (_, index) => (index * 37) % 1_001);
let items: number[];

bench("radixSort sorts 1,000 numbers", () => { radixSort(items); }, {
  setup: () => { items = [...source]; },
});
