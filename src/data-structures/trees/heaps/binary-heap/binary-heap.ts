import type { Node } from "@ds/graphs/graph-view/graph-view";

type compareFunc<V> = (left: V | undefined, right: V | undefined) => number;
class BinaryHeap<V> {
    heap: Array<Node<number, V>>;
    next_key: number;
    compare: compareFunc<V>

    constructor(compare: compareFunc<V>) {
        this.heap = [];
        this.next_key = 0;
        this.compare = compare;
    }

    push(value: V): boolean {
        this.heap.push({ key: this.next_key, value })

        let n = this.heap.length - 1;
        while(this.compare(this.heap[n]?.value, this.heap[Math.floor((n-1)/2)]?.value) < 0 || n < 0) {
            [this.heap[Math.floor((n-1)/2)], this.heap[n]] = [this.heap[n], this.heap[Math.floor((n-1)/2)]];
            n = (n-1)/2
        }

        this.next_key++;

        return true;
    }

    pop(): Node<number, V> | undefined {
        [this.heap[0], this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1], this.heap[0]];
        let node: Node<number, V> | undefined = this.heap.pop();

        let n: number = 0;
        while(
            n < this.heap.length &&
            this.compare(this.heap[n]?.value, this.heap[(n*2)+1].value) < 0 ||
            this.compare(this.heap[n]?.value, this.heap[(n*2)+2].value) < 0
        ) {
            let child_index = (n*2)+1;
            if (this.compare(this.heap[(n*2)+1].value, this.heap[(n*2)+2].value) < 0) {
                child_index = (n*2)+2;
            }

            [this.heap[child_index], this.heap[n]] = [this.heap[n], this.heap[child_index]];
            n = child_index;
        }

        return node;
    }

    peek(): Node<number, V> | undefined {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }
};

export { BinaryHeap };
export default BinaryHeap;
