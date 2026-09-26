const countingSort = (items: Array<number>, limit: number): boolean => {
    if (!Number.isSafeInteger(limit) || limit < 0 || items.some((item) => !Number.isSafeInteger(item) || item < 0 || item >= limit)) {
        return false;
    }

    if(items.length === 0 || items.length === 1) {
        return true;
    }

    const counts: Array<number> = Array.from({ length: limit }, () => 0);
    const result: Array<number> = [];

    for(let i = 0; i < items.length; i++) {
        counts[items[i]]++;
    }

    for(let i: number = 0; i < counts.length;){
        if (counts[i] !== 0) {
            result.push(i);
            counts[i]--;
        } else {
            i++;
        }
    }

    items.splice(0, items.length, ...result);

    return true;
};

export { countingSort };
export default countingSort;
