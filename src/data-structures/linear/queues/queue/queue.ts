class Queue<A> {
	// A native array provides contiguous FIFO storage for this initial implementation.
    private queue: Array<A>;

    constructor() {
        this.queue = [];
    }

    enqueue(value:A): boolean {
		// Appending places each new value at the back of the queue.
        this.queue.push(value);
        return true;
    }

    dequeue(): A | undefined {
		// shift removes the front value; it also reindexes later array elements.
        return this.queue.shift();
    }

    peek(): A | undefined {
		// Index zero is the front of the queue without changing queue state.
        return this.queue[0];
    }

    size(): number {
		// Length remains the single source of truth for the current item count.
        return this.queue.length;
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }
};

export { Queue };
export default Queue;
