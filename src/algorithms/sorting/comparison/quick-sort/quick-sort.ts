const recurse = (items: Array<any>, compare: (left: any, right: any) => number): Array<any> => {
    // Empty and singleton partitions already satisfy the ordering invariant.
    if(items.length <= 1) {
        return items;
    }

    // Partition around a middle pivot so recursive calls receive only lower and higher values.
    const less_than_array: Array<any> = [],
        equal_to_array: Array<any> = [],
        greater_than_array: Array<any> = [],
        pivot = items[Math.floor(items.length / 2)];

    // Keep equal values together to avoid recurring on duplicates.
    for (let i = 0; i < items.length; i++) {
        if(compare(items[i], pivot) < 0) {
            less_than_array.push(items[i]);
        } else if(compare(items[i], pivot) > 0) {
            greater_than_array.push(items[i]);
        } else {
            equal_to_array.push(items[i]);
        }
    }

    // Concatenating sorted lower, equal, and higher partitions produces a sorted result.
    return [...recurse(less_than_array, compare), ...equal_to_array, ...recurse(greater_than_array, compare)];
}

const quickSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    // Trivial inputs require no partitioning.
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    // Replace the caller's contents without replacing the caller's array object.
    items.splice(0, items.length, ...recurse(items, compare));

    return true;
};

export { quickSort };
export default quickSort;
