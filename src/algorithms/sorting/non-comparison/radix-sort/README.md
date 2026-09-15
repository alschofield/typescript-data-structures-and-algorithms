# Radix Sort

## Public Contract

`radixSort(items): boolean | void`

- The current tests do not declare the element type, supported numeric domain, return meaning, or mutation behavior.

## Safety And Semantics

- Number safety must be explicit: finite integers, sign handling, radix, and maximum supported magnitude are all unspecified.
- Nullish inputs, invalid values, stability, and output/reference semantics remain unverified.
- Do not add a comparator, radix option, key extractor, or error mode without an implementation contract.

## Complexity And Verification

- For a declared radix and digit count, the conventional target is O(d(n + k)) time and O(n + k) auxiliary space.
- Verify empty/singleton input, zero, repeated values, domain boundaries, invalid numeric values, stability if promised, return meaning, and mutation/reference behavior.
