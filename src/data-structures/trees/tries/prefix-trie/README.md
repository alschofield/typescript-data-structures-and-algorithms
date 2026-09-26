# Prefix Trie

## Implementation Status

Target scaffold. Production behavior is not claimed until the learner-owned implementation and its verification are complete.

## How It Works

Each node represents one character and owns a map of next characters. Terminal
markers distinguish complete stored words from prefixes; removal prunes unused
suffixes.

## Required API

```ts
export class PrefixTrie {
  constructor();
  insert(word: string): boolean;
  contains(word: string): boolean;
  startsWith(prefix: string): boolean;
  remove(word: string): boolean;
  size(): number;
}
```

The module default export is `PrefixTrie`.

## Contract

`insert` returns `true`, creating missing character nodes and increasing
`size()` only for a newly terminal word. Inserting an existing word increments
that terminal node's `occurrences` but does not increase `size()`. `contains`
requires a terminal marker, while `startsWith` accepts any existing path.
`remove` returns `false` for an absent word or a prefix that is not terminal;
otherwise it clears the terminal marker, decrements `size()`, and prunes
unneeded suffix nodes. One removal clears an existing word even if repeated
inserts incremented `occurrences`. The implementation assumes string inputs;
invalid runtime values are not handled.

## Complexity Targets

O(L) time for insert, lookup, prefix lookup, and removal of a word/prefix of
length `L`; O(total stored character nodes) space.

## Verification

```sh
bun run test -- src/data-structures/trees/tries/prefix-trie/prefix-trie.test.ts
```
