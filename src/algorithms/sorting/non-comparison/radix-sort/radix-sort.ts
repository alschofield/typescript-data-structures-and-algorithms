const radixSort = (items: Array<number>): boolean => {
    if (items.some((item) => !Number.isSafeInteger(item) || item < 0 || item > 0xffff_ffff)) {
        return false;
    }

    if(items.length === 0 || items.length === 1) {
        return true;
    }

    const shifts: Array<number> = [0, 8, 16, 24];

    let result: Array<number> = items;
    for(const shift of shifts) {
        const output: Array<number> = Array.from({ length: items.length }, () => 0);
        const counts: Array<number> = Array.from({ length: 256 }, () => 0);
        for(let i = 0; i < result.length; i++) {
            counts[(result[i] >>> shift) & 0xff]++;
        }

        for (let i = 1; i < 256; i++) {
            counts[i] += counts[i - 1];
        }

        for(let i = result.length - 1; i >= 0; i--) {
            output[--counts[(result[i] >>> shift) & 0xff]] = result[i];
        }

        result = output;
    }

    items.splice(0, items.length, ...result);

    return true;
}

export { radixSort };
export default radixSort;
