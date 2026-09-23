const recurse = (items: Array<any>, compare: (left: any, right: any) => number): Array<any> => {
    if(items.length === 0 || items.length === 1) {
        return items;
    }
    
    const left_side = recurse(items.slice(0, (items.length - 1)/2), compare);
    const right_side = recurse(items.slice((items.length - 1)/2), compare);

    const result = [];

    for (let i = 0, left_i = 0, right_i = 0; i < items.length; i++) {
        if(compare(left_side[left_i], right_side[right_i]) <= 0 || right_i >= right_side.length) {
            result.push(left_side[left_i]);
            left_i++;
        } else if(compare(left_side[left_i], right_side[right_i]) > 0 || left_i >= left_side.length) {
            result.push(right_side[right_i]);
            right_i++;
        }
    }

    return result;
};

const mergeSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    items = recurse(items, compare);

    return true;
};

export { mergeSort };
export default mergeSort;
