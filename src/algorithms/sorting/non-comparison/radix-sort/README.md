# Radix Sort

## Public Contract

`radixSort(items)` sorts unsigned 32-bit safe integers in place using four
8-bit passes and returns `true`.

## Safety And Semantics

- Negative, fractional, and values above `0xffffffff` return `false` without
  mutating the input. Each digit pass is stable.

## Complexity And Verification

- For a declared radix and digit count, the conventional target is O(d(n + k)) time and O(n + k) auxiliary space.
- Verify empty/singleton input, zero, repeated values, domain boundaries, invalid numeric values, stability if promised, return meaning, and mutation/reference behavior.
