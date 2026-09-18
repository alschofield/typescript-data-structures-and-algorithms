# Data Structures and Algorithms in TypeScript

A from-first-principles curriculum mirroring the canonical C repository's 26 applicable leaves and behavioral contracts. Production source is intentionally absent for the learner to implement.

`Array<T>` is the native dynamic-sequence baseline and is not a separate curriculum exercise. It may be used where a topic needs contiguous backing storage.

## Taxonomy

src/ contains the same applicable leaf paths as ../c-data-structures-and-algorithms/src/, including one separate-chaining hash table with fixed and resizing set policies and the GraphView graph contract at data-structures/graphs/graph-view.

## Commands

```sh
bun install
bun run test
bun run bench
```

`bun run test` runs generated contract scaffolds. Leaves with intentionally
empty learner-owned source modules will fail until their public API exists;
target one implemented leaf while building it.

## Restrictions

Implement each topic from first principles. Do not replace curriculum exercises with language-library containers, sorting/search routines, graph algorithms, or priority queues. `Array<T>` is the allowed native dynamic-sequence baseline where contiguous backing storage is required.
