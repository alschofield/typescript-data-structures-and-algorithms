const selectionSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    if(items.length === 0 || items.length === 1) {
        return true
    }

    for (let i = 0; i < items.length; i++) {
        let smallest_index = i;
        for (let n = i + 1; n < items.length; n++) {
            if(compare(items[smallest_index], items[n]) > 0) smallest_index = n;
        }

        const temporary = items[i];
        items[i] = items[smallest_index];
        items[smallest_index] = temporary;
    }

    return true;
};

export { selectionSort };
export default selectionSort;
