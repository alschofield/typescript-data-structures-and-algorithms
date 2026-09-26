import { bench, describe } from "vitest";
import { bubbleSort } from "./comparison/bubble-sort/bubble-sort";
import { heapSort } from "./comparison/heap-sort/heap-sort";
import { insertionSort } from "./comparison/insertion-sort/insertion-sort";
import { mergeSort } from "./comparison/merge-sort/merge-sort";
import { quickSort } from "./comparison/quick-sort/quick-sort";
import { selectionSort } from "./comparison/selection-sort/selection-sort";
import { countingSort } from "./non-comparison/counting-sort/counting-sort";
import { radixSort } from "./non-comparison/radix-sort/radix-sort";

const items = Array.from({ length: 100 }, (_, index) => (index * 37) % 101);
const compare = (left: number, right: number) => left - right;

describe("Sorting", () => {
  let input: number[];
  const inputSetup = () => { input = [...items]; };

  bench("bubble sort", () => { bubbleSort(input, compare); }, { setup: inputSetup });
  bench("insertion sort", () => { insertionSort(input, compare); }, { setup: inputSetup });
  bench("selection sort", () => { selectionSort(input, compare); }, { setup: inputSetup });
  bench("heap sort", () => { heapSort(input, compare); }, { setup: inputSetup });
  bench("merge sort", () => { mergeSort(input, compare); }, { setup: inputSetup });
  bench("quick sort", () => { quickSort(input, compare); }, { setup: inputSetup });
  bench("counting sort", () => { countingSort(input, 101); }, { setup: inputSetup });
  bench("radix sort", () => { radixSort(input); }, { setup: inputSetup });
});
