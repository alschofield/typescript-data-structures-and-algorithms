# Data Structures and Algorithms in TypeScript

A from-first-principles curriculum mirroring the canonical C repository's 27-leaf taxonomy and behavioral contracts. Production source is intentionally absent for the learner to implement.

## Taxonomy

src/ contains the same 27 leaf paths as ../c-data-structures-and-algorithms/src/, including one separate-chaining hash table with fixed and resizing set policies and the GraphView graph contract at data-structures/graphs/graph-view.

## Commands

- npm test runs generated contract scaffolds. They intentionally fail to import until the corresponding user-owned production API exists.

## Restrictions

Implement each topic from first principles. Do not replace curriculum exercises with language-library containers, sorting/search routines, graph algorithms, or priority queues. Native arrays/lists may provide backing storage where the contract requires contiguous storage.
