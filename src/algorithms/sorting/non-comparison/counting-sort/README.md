# Counting Sort

## Public Contract

`countingSort(items, keyLimit)` accepts non-negative safe integers in
`[0, keyLimit)`, sorts the original array in place, and returns `true`.

## Safety And Semantics

- Invalid limits or values return `false` before mutating the input. The method
  does not support negative, fractional, or out-of-range values.

## Complexity And Verification

- Once a finite key range is specified, the conventional target is O(n + k) time and O(n + k) auxiliary space.
- Verify empty input, boundary keys, invalid numeric inputs, duplicates and stability if promised, return meaning, and container/reference behavior.
