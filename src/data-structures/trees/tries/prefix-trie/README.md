# Prefix Trie

## Public Contract

`PrefixTrie` exposes `insert(key)`, `contains(key)`, `startsWith(prefix)`, `remove(key)`, and `size`.

- The current tests do not declare parameter/return types, empty-string behavior, duplicate policy, invalid-input behavior, or property-versus-method form for `size`.

## Safety And Semantics

- `null` and `undefined` key/prefix handling is not specified. Do not silently coerce them to strings or document an error mode without implementation evidence.
- Keys are strings only if the eventual TypeScript signatures say so; character/Unicode normalization and case handling are likewise unspecified.
- Insert/remove mutate the trie. Tests must establish duplicate effects, removal/pruning behavior, size changes, and whether any returned values expose mutable references.

## Complexity And Verification

- For string-like keys, the conventional target is O(m) time per operation, where m is the key/prefix length.
- Verify empty input, prefix versus whole-key behavior, duplicate insert/remove, shared prefixes, nullish invalid inputs, size consistency, and reference/mutation behavior.
