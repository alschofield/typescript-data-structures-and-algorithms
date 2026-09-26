import { bench, describe } from "vitest";
import { BinarySearchTree } from "./binary-search-tree";

describe("BinarySearchTree", () => {
  let tree: BinarySearchTree<number>;

  bench("insert 1,000 shuffled", () => {
    for (let index = 1_000; index < 2_000; index += 1) tree.insert(index);
  }, { setup: () => { tree = numberTree(); } });

  bench("find middle", () => {
    for (let index = 0; index < 1_000; index += 1) tree.find(500);
  }, { setup: () => { tree = numberTree(); } });

  bench("in-order", () => {
    tree.inOrder(() => true);
  }, { setup: () => { tree = numberTree(); } });

  bench("remove root", () => {
    tree.remove(500);
  }, { setup: () => { tree = numberTree(); } });
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
