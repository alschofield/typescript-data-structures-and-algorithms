const heapSort = (items: Array<any>, compare: (left: any, right: any) => number): boolean => {
    if(items.length === 0 || items.length === 1) {
        return true;
    }

    for (let i: number = items.length - 1; i < items.length; i--) {
        for (let n = i; n >= 0;) {
            if(compare(items[n], items[(n-1)/2]) < 0) {
                items[n], items[(n-1)/2] = items[(n-1)/2], items[n];
            }

            n = (n-1)/2;
        }
    }

    for(let next_index: number = items.length - 1; next_index >= 0;next_index--) {
        items[0], items[next_index] = items[next_index], items[0];
        next_index--;

        for(
            let parent_index: number = 0,
            left_index: number = 1,
            right_index: number = 2;
            right_index >= next_index;
        ) {
            let child_index = left_index;
            if(compare(items[left_index], items[right_index]) <= 0) {
                child_index = left_index;
            } else if(compare(items[left_index], items[right_index]) > 0) {
                child_index = right_index
            }

            if (compare(items[parent_index], items[child_index]) > 0) {
                items[parent_index], items[child_index] = items[child_index], items[parent_index];
                parent_index = child_index;
                left_index = (parent_index*2)+1;
                right_index = (parent_index*2)+2;
            } else {
                break;
            }
        }
    }

    return true;
};

export { heapSort };
export default heapSort;
