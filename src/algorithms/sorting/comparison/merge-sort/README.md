# Merge Sort

## Public Contract

`mergeSort(items, compare)` sorts `items` in place and returns `true`; it uses
temporary arrays while retaining the original container and object references.

## Safety And Semantics

- Left-side ties are merged first, making this implementation stable.

## Complexity And Verification

- The conventional target is O(n log n) time and O(n) auxiliary space.
- Verify empty/singleton, odd and even lengths, duplicates, structural objects, ordering, stability if promised, return meaning, and original-container/reference behavior.
