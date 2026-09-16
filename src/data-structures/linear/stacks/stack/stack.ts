class Stack<A> {
	// A native array is the allowed contiguous backing store for this leaf.
    private stack: Array<A>;

    constructor() {
        this.stack = [];
    }

    push(value:A): boolean {
		// Appending to the array places the value at the top of the stack.
        this.stack.push(value);
        return true;
    }

    pop(): A | undefined {
		// Array.pop removes and returns the current top, or undefined when empty.
        return this.stack.pop();
    }

    peek(): A | undefined {
		// The final array position is the top without mutating stack state.
        return this.stack[this.stack.length - 1];
    }

    size(): number {
		// Length remains the single source of truth for the number of elements.
        return this.stack.length;
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }
};

export { Stack };
export default Stack;
