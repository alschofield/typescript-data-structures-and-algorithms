# Doubly Linked List

## How It Works

A node chain with forward and backward links plus head and tail pointers.

## Required API

Implement DoublyLinkedList<T> with: pushFront(item), pushBack(item), popFront(), popBack(), get(index), insert(index, item), remove(index), size, isEmpty. Use idiomatic TypeScript generics and return values; the required operations remain equivalent to the canonical C curriculum.

## Contract

- Maintain reciprocal next/prev links. Indexes are [0, size); insert accepts size. Walk indexed operations from the nearer end. Failed operations preserve the list and the final removal clears both ends.
- Implement from first principles. Do not substitute Map, Set, built-in sorting/searching, or a library priority queue for the exercise.

## Complexity Targets

- End operations, size, isEmpty O(1); indexed operations O(n), at most n/2 traversal steps; O(n) nodes with two links.
