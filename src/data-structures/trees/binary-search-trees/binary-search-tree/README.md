# Binary Search Tree

## How It Works

An unbalanced ordered binary tree: left values compare before a node, right values after it.

## Required API

Implement BinarySearchTree<T> with: constructor(compare), insert(item), find(key), contains(key), remove(key), inOrder(visitor), size, isEmpty. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Comparison follows negative/zero/positive semantics. Duplicate insertions fail and retain the first item. Removal handles leaves, one child, two children, and root. In-order traversal is strictly ordered and stops if its visitor returns false.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- insert/find/remove/contains O(log n) balanced, O(n) worst case; inOrder O(n); O(n) nodes plus O(height) working space.
