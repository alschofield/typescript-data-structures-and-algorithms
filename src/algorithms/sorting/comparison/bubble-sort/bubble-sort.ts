const bubbleSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    // Trivial inputs are already sorted and need no comparisons.
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    // Each pass places the largest remaining item at the current upper bound.
    let l = items.length - 1;
    while(l > 0) {
        let swapped: boolean = false;
        // Compare adjacent items across the unsorted prefix and exchange inversions.
        for (let n = 0; n < l; n++) {
            if(compare(items[n], items[n + 1]) > 0) {
                const temporary = items[n];
                items[n] = items[n + 1];
                items[n + 1] = temporary;
                swapped = true;
            }
        }

        // A pass with no exchange proves that the remaining prefix is sorted.
        if(!swapped) {
            break;
        }

        l--;
    }

    return true;
};

export { bubbleSort };
export default { bubbleSort };
