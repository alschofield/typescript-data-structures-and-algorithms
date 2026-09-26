const selectionSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    // Trivial inputs are already sorted and need no selection work.
    if(items.length === 0 || items.length === 1) {
        return true
    }

    // Select the smallest item from each remaining suffix for the next slot.
    for (let i = 0; i < items.length; i++) {
        let smallest_index = i;
        // Scan the unsorted suffix to find the best candidate for index i.
        for (let n = i + 1; n < items.length; n++) {
            if(compare(items[smallest_index], items[n]) > 0) smallest_index = n;
        }

        // Swap the selected minimum into the boundary of the sorted prefix.
        const temporary = items[i];
        items[i] = items[smallest_index];
        items[smallest_index] = temporary;
    }

    return true;
};

export { selectionSort };
export default selectionSort;
