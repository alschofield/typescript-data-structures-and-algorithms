const radixSort = (items: Array<number>): boolean => {
    // Four byte passes cover the supported unsigned 32-bit integer range.
    if (items.some((item) => !Number.isSafeInteger(item) || item < 0 || item > 0xffff_ffff)) {
        return false;
    }

    // Trivial valid inputs require no digit passes.
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    // Process digits from least to most significant so stable passes compose.
    const shifts: Array<number> = [0, 8, 16, 24];

    let result: Array<number> = items;
    // Run a stable counting sort for each byte-sized digit.
    for(const shift of shifts) {
        const output: Array<number> = Array.from({ length: items.length }, () => 0);
        const counts: Array<number> = Array.from({ length: 256 }, () => 0);
        // Count values by the current byte.
        for(let i = 0; i < result.length; i++) {
            counts[(result[i] >>> shift) & 0xff]++;
        }

        // Convert counts to exclusive end positions for each byte bucket.
        for (let i = 1; i < 256; i++) {
            counts[i] += counts[i - 1];
        }

        // Walk backward to preserve ordering established by earlier digit passes.
        for(let i = result.length - 1; i >= 0; i--) {
            output[--counts[(result[i] >>> shift) & 0xff]] = result[i];
        }

        result = output;
    }

    // Publish the fully ordered values through the original array reference.
    items.splice(0, items.length, ...result);

    return true;
}

export { radixSort };
export default radixSort;
