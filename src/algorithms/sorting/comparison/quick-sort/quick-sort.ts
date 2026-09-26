const recurse = (items: Array<any>, compare: (left: any, right: any) => number): Array<any> => {
    if(items.length <= 1) {
        return items;
    }

    const less_than_array: Array<any> = [],
        equal_to_array: Array<any> = [],
        greater_than_array: Array<any> = [],
        pivot = items[Math.floor(items.length / 2)];

    for (let i = 0; i < items.length; i++) {
        if(compare(items[i], pivot) < 0) {
            less_than_array.push(items[i]);
        } else if(compare(items[i], pivot) > 0) {
            greater_than_array.push(items[i]);
        } else {
            equal_to_array.push(items[i]);
        }
    }

    return [...recurse(less_than_array, compare), ...equal_to_array, ...recurse(greater_than_array, compare)];
}

const quickSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    items.splice(0, items.length, ...recurse(items, compare));

    return true;
};

export { quickSort };
export default quickSort;
