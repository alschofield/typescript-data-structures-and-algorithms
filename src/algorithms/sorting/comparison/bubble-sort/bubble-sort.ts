const bubbleSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    let l = items.length - 1;
    for (let i = 0; i !== l;) {
        let swapped: boolean = false;
        let candidate_index: number = i;
        for (let n = i; n < l; n++) {
            if(compare(items[candidate_index], items[n]) > 0) {
                items[candidate_index], items[n] = items[n], items[candidate_index];
                swapped = true;
            }

            candidate_index = n;
        }

        if(!swapped) {
            break;
        }

        l--;
    }

    return true;
};

export { bubbleSort };
export default { bubbleSort };
