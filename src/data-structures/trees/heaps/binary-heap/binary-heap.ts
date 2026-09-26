import type { Node } from "@ds/graphs/graph-view/graph-view";

type compareFunc<V> = (left: V | undefined, right: V | undefined) => number;
class BinaryHeap<V> {
    heap: Array<Node<number, V>>;
    next_key: number;
    compare: compareFunc<V>;

    constructor(compare: compareFunc<V>) {
        this.heap = [];
        this.next_key = 0;
        this.compare = compare;
    }

    push(value: V): boolean {
        // Append first, then restore the min-heap invariant on its ancestor path.
        this.heap.push({ key: this.next_key, value });

        let n = this.heap.length - 1;
        // Bubble the new value upward until its parent is no greater.
        while(n > 0) {
            const parent = Math.floor((n - 1) / 2);
            // The local parent-child ordering is restored, so ancestors remain valid.
            if (this.compare(this.heap[n].value, this.heap[parent].value) >= 0) {
                break;
            }

            [this.heap[parent], this.heap[n]] = [this.heap[n], this.heap[parent]];
            n = parent;
        }

        this.next_key++;

        return true;
    }

    pop(): Node<number, V> | undefined {
        // An empty heap has no minimum node to remove.
        if (this.heap.length === 0) {
            return undefined;
        }

        // Move the final node to the root before removing the former minimum.
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        const node = this.heap.pop();

        let n: number = 0;
        // Sift the replacement root down until it is no greater than either child.
        while((n * 2) + 1 < this.heap.length) {
            const left = (n * 2) + 1;
            const right = left + 1;
            let child = left;
            // Prefer the smaller child so the next swap repairs the heap relation.
            if (right < this.heap.length && this.compare(this.heap[right].value, this.heap[left].value) < 0) {
                child = right;
            }

            // Stop when the parent is already the smallest node in this subtree.
            if (this.compare(this.heap[n].value, this.heap[child].value) <= 0) {
                break;
            }

            [this.heap[child], this.heap[n]] = [this.heap[n], this.heap[child]];
            n = child;
        }

        return node;
    }

    peek(): Node<number, V> | undefined {
        // The heap root stores the current minimum without removing it.
        return this.heap[0];
    }

    size(): number {
        // The backing array length is the authoritative element count.
        return this.heap.length;
    }

    isEmpty(): boolean {
        // A heap is empty precisely when its backing array has no nodes.
        return this.heap.length === 0;
    }
};

export { BinaryHeap };
export default BinaryHeap;
