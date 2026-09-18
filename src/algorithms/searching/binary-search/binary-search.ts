const BinarySearch = (items: Array<any>, target: any, compare: (left: any, right: any) => number): any | undefined => {
    // left and right bound the inclusive sorted region that may contain target.
    let pivot: number = (items.length - 1) / 2;
    let left: number = 0;
    let right: number = items.length - 1;
    let comparison: number;

    while(left <= right) {
        // Floor keeps the midpoint a valid array index inside the active range.
        pivot = left + Math.floor((right - left) / 2);
        // Compare target to the current midpoint using caller-defined ordering.
        comparison = compare(target, items[pivot]);
        if(comparison > 0) {
            // The target sorts after pivot, so exclude pivot and the left half.
            left = pivot + 1;
        } else if (comparison < 0) {
            // The target sorts before pivot, so exclude pivot and the right half.
            right = pivot - 1;
        } else {
            // Returning the stored item preserves object-reference identity.
            return items[pivot];
        }
    }

    // An exhausted range means the sorted input has no matching item.
    return undefined;
};

export { BinarySearch };
export default BinarySearch;
