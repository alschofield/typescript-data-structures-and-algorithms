import { describe, expect, it } from "vitest";
import { BinarySearchTree } from "./binary-search-tree";

describe("Binary Search Tree", () => {
  it("exports the required BinarySearchTree<T> API", () => {
    expect(BinarySearchTree).toBeDefined();
  });

  it("inserts, finds, and tracks duplicate occurrence metadata", () => {
    const tree = numberTree();
    expect(tree.isEmpty()).toBe(false);
    expect(tree.size()).toBe(7);
    expect(tree.find(7)?.value).toBe(7);
    expect(tree.find(99)).toBeUndefined();
    expect(tree.contains(12)).toBe(true);
    expect(tree.contains(99)).toBe(false);

    tree.insert(7);
    expect(tree.size()).toBe(7);
    expect(tree.find(7)?.occurrences).toBe(1);
  });

  it("visits values in order and honors visitor stop", () => {
    const tree = numberTree();
    const values: number[] = [];
    expect(tree.inOrder((node) => { values.push(node!.value); return true; })).toBe(true);
    expect(values).toEqual([3, 5, 7, 10, 12, 15, 20]);

    const partial: number[] = [];
    expect(tree.inOrder((node) => { partial.push(node!.value); return node!.value !== 7; })).toBe(false);
    expect(partial).toEqual([3, 5, 7]);
  });

  it("removes leaf, one-child, and two-child nodes while preserving order", () => {
    const tree = numberTree();
    expect(tree.remove(3)).toBe(true);
    expect(tree.remove(5)).toBe(true);
    expect(tree.remove(10)).toBe(true);
    expect(tree.remove(99)).toBe(false);
    expect(tree.size()).toBe(4);

    const values: number[] = [];
    tree.inOrder((node) => { values.push(node!.value); return true; });
    expect(values).toEqual([7, 12, 15, 20]);
    expect(tree.root?.value).toBe(12);
  });

  it("handles empty and singleton root removal", () => {
    const tree = new BinarySearchTree<number>((left, right) => (left ?? 0) - (right ?? 0));
    expect(tree.remove(1)).toBe(false);
    tree.insert(1);
    expect(tree.remove(1)).toBe(true);
    expect(tree.root).toBeUndefined();
    expect(tree.size()).toBe(0);
    expect(tree.isEmpty()).toBe(true);
  });

  it("implements a directed child-edge graph view", () => {
    const tree = numberTree();
    const root = tree.nodeByKey(0)!;
    expect(tree.directed()).toBe(true);
    expect(tree.nodeCount()).toBe(7);
    expect(tree.nodeByKey(99)).toBeUndefined();
    expect([...tree.neighbors(root)].map((edge) => [edge.to.value, edge.weight])).toEqual([[5, 1], [15, 1]]);
    expect([...tree.neighbors(tree.find(3)!)].length).toBe(0);
  });
});

function numberTree(): BinarySearchTree<number> {
  const tree = new BinarySearchTree<number>((left, right) => (left ?? 0) - (right ?? 0));
  for (const value of [10, 5, 15, 3, 7, 12, 20]) tree.insert(value);
  return tree;
}
