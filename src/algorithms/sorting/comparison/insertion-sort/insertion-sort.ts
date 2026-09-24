const insertionSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    for(let i = 0; i < items.length; i++) {
        for(let n = i; n-1 >= 0; n--) {
            if(compare(items[n-1], items[n]) < 0) {
                items[n-1], items[n] = items[n], items[n-1];
            } else {
                break;
            }
        }
    }

    return true;
}

export { insertionSort };
export default insertionSort;
