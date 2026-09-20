# Prefix Trie

## Public Contract

```ts
class PrefixTrie {
  insert(word: string): boolean
  contains(word: string): boolean
  startsWith(prefix: string): boolean
  remove(word: string): boolean
  size(): number
}
```

- `children` is a `Map<string, Node<string, string>>`, so each character lookup
  is expected O(1). `size` counts distinct terminal words; `char_count` tracks
  allocated non-root character nodes.

## Safety And Semantics

- Empty string is supported as a root-terminal word. `startsWith("")` is true
  for every trie; `contains("")` is true only after empty-string insertion.
- Duplicate insertion increments terminal `occurrences` display metadata without
  increasing distinct-word `size`; removal deletes the terminal word regardless
  of occurrence metadata.
- Removal prunes only nodes no longer needed by another word's prefix.

## Complexity Targets

- Insert, contains, startsWith, and remove are O(m) for a word/prefix length m.

## Verification

```sh
bun run test -- src/data-structures/trees/tries/prefix-trie/prefix-trie.test.ts
bun run bench -- src/data-structures/trees/tries/prefix-trie/prefix-trie.bench.ts
```

Tests cover shared prefixes, terminal-versus-prefix behavior, duplicate metadata,
pruning, empty-string behavior, word count, and character-node count.
