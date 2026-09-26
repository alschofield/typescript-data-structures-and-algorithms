const heapSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    // Trivial inputs need neither heap construction nor extraction.
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    // Build a max heap by bubbling each added item toward its parent.
    for (let i: number = 1; i < items.length; i++) {
        // Restore the heap invariant along the newly added item's ancestor path.
        for (let n = i; n > 0;) {
            const parent = Math.floor((n - 1) / 2);
            // Stop once the parent is at least as large as its child.
            if (compare(items[n], items[parent]) <= 0) {
                break;
            }

            const temporary = items[n];
            items[n] = items[parent];
            items[parent] = temporary;
            n = parent;
        }
    }

    // Repeatedly move the maximum root into the next sorted position at the end.
    for(let next_index: number = items.length - 1; next_index > 0; next_index--) {
        const temporary = items[0];
        items[0] = items[next_index];
        items[next_index] = temporary;

        // Sift the replacement root down until the remaining prefix is a max heap again.
        for(let parent_index: number = 0, left_index: number = 1; left_index < next_index;) {
            const right_index = left_index + 1;
            let child_index = left_index;
            // Prefer the larger child so a single swap repairs the parent relation.
            if(right_index < next_index && compare(items[right_index], items[left_index]) > 0) {
                child_index = right_index;
            }

            // Stop once the parent dominates both children.
            if (compare(items[parent_index], items[child_index]) >= 0) {
                break;
            }

            const child_temporary = items[parent_index];
            items[parent_index] = items[child_index];
            items[child_index] = child_temporary;
            parent_index = child_index;
            left_index = (parent_index * 2) + 1;
        }
    }

    return true;
};

export { heapSort };
export default heapSort;
