	// Scans items in their existing order without sorting or mutating the input.
const LinearSearch = (items: Array<any>, target: any, compare: (left: any, right: any) => boolean): any | undefined => {
    // Inspect each item until the caller-defined equality relation matches.
    for (let item of items) {
		// The caller owns equality semantics through the supplied comparison function.
        if (compare(item, target)) {
			// Stop at the first match so duplicates return the earliest matching item.
            return item;
        }
    }

	// Exhausting the sequence reports ordinary absence with undefined.
    return undefined;
};

export { LinearSearch };
export default LinearSearch;
