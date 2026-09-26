const recurse = (items: Array<any>, compare: (left: any, right: any) => number): Array<any> => {
    // A one-item slice is its own sorted result.
    if(items.length === 0 || items.length === 1) {
        return items;
    }
    
    // Sort two independent halves before merging them into one ordered sequence.
    const midpoint = Math.floor(items.length / 2);
    const left_side = recurse(items.slice(0, midpoint), compare);
    const right_side = recurse(items.slice(midpoint), compare);

    const result = [];

    // Repeatedly take the smaller front item, preserving equal-item order from the left.
    for (let i = 0, left_i = 0, right_i = 0; i < items.length; i++) {
        if(right_i >= right_side.length || (left_i < left_side.length && compare(left_side[left_i], right_side[right_i]) <= 0)) {
            result.push(left_side[left_i]);
            left_i++;
        } else {
            result.push(right_side[right_i]);
            right_i++;
        }
    }

    return result;
};

const mergeSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    // Trivial inputs do not require allocating merge slices.
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    // Replace the caller's array contents while preserving its original identity.
    items.splice(0, items.length, ...recurse(items, compare));

    return true;
};

export { mergeSort };
export default mergeSort;
