const insertionSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    // Trivial inputs are already sorted and need no insertion work.
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    // Grow a sorted prefix by inserting each next item into its proper position.
    for(let i = 0; i < items.length; i++) {
        // Bubble the item left only until it follows its sorted predecessor.
        for(let n = i; n-1 >= 0; n--) {
            if(compare(items[n-1], items[n]) > 0) {
                const temporary = items[n - 1];
                items[n - 1] = items[n];
                items[n] = temporary;
            } else {
                // Earlier items are sorted, so no further movement is needed.
                break;
            }
        }
    }

    return true;
}

export { insertionSort };
export default insertionSort;
