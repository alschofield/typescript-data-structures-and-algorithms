import { bench, describe } from "vitest";
import { BinarySearchTree } from "./binary-search-tree";

describe("BinarySearchTree", () => {
  bench("insert shuffled", () => {
    const tree = numberTree();
    for (let index = 1_000; index < 2_000; index += 1) tree.insert(index);
  });

  bench("find middle", () => {
    const tree = numberTree();
    for (let index = 0; index < 1_000; index += 1) tree.find(500);
  });

  bench("in-order", () => {
    const tree = numberTree();
    tree.inOrder(() => true);
  });

  bench("remove root", () => {
    const tree = numberTree();
    tree.remove(500);
  });
});

function numberTree(): BinarySearchTree<number> {
  const tree = new BinarySearchTree<number>((left, right) => (left ?? 0) - (right ?? 0));
  const values = Array.from({ length: 1_000 }, (_, index) => index);
  for (let index = values.length - 1; index > 0; index -= 1) {
    const swap = (index * 31) % (index + 1);
    [values[index], values[swap]] = [values[swap], values[index]];
  }
  for (const value of values) tree.insert(value);
  return tree;
}
