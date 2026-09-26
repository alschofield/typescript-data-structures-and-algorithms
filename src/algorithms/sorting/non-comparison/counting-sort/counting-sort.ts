const countingSort = (items: Array<number>, limit: number): boolean => {
    // Counting sort only accepts non-negative safe integers in its declared range.
    if (!Number.isSafeInteger(limit) || limit < 0 || items.some((item) => !Number.isSafeInteger(item) || item < 0 || item >= limit)) {
        return false;
    }

    // Trivial valid inputs are already sorted.
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    // Allocate one frequency slot per possible input value.
    const counts: Array<number> = Array.from({ length: limit }, () => 0);
    const result: Array<number> = [];

    // Count each value before emitting the ordered result.
    for(let i = 0; i < items.length; i++) {
        counts[items[i]]++;
    }

    // Emit every value as many times as it was observed.
    for(let i: number = 0; i < counts.length;){
        if (counts[i] !== 0) {
            result.push(i);
            counts[i]--;
        } else {
            // Advance only after the current value's full count is exhausted.
            i++;
        }
    }

    // Copy the ordered values back into the caller-owned array.
    items.splice(0, items.length, ...result);

    return true;
};

export { countingSort };
export default countingSort;
