# Data Structures and Algorithms in TypeScript

## Purpose and Status

A language-specific, from-first-principles data-structures-and-algorithms learning curriculum.
Target-scaffold repository. Production TypeScript source is intentionally learner-owned.

## Curriculum Coverage

26 applicable topic leaves, including separate-chaining hash-table policies and the GraphView graph contract.

## Commands

```sh
bun install
bun run test
bun run bench
```

## Conventions

`Array<T>` is the allowed native dynamic-sequence baseline when contiguous dynamic storage is needed.
Implement learning targets directly; do not replace curriculum exercises with language-library containers, sorting/search routines, graph algorithms, or priority queues.

## Documentation Contract Template

Each topic leaf README uses these sections: `Implementation Status`, `How It Works`, `Required API`, `Contract`, `Complexity Targets`, and `Verification`. The leaf README is authoritative for that topic; source and tests must preserve its language-specific API syntax and stated behavior.

## Repository-Specific Notes

Production implementations are learner-owned. Documentation and verification scaffolding may describe the required work but do not substitute for it.
