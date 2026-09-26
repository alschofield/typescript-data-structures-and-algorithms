import type { Node } from "@ds/graphs/graph-view/graph-view";

class DoublyLinkedList<A> {
    // Holds the first node for constant-time front operations.
    head: Node<undefined, A> | undefined;
    // Holds the final node for constant-time back operations.
    tail: Node<undefined, A> | undefined;
    // Tracks node count without requiring traversal.
    length: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    pushFront(value: A): boolean {
		// A new front node points forward to the former head.
        const node: Node<undefined, A> = {
            value,
        };

        if (this.length === 0) {
            this.head = node;
            this.tail = this.head;
        } else if (this.length === 1) {
            node.next = this.head;
            if(this.tail) this.tail.prev = node;
            this.head = node;
        } else {
            if(this.head) this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++;

        return true
    }

    pushBack(value: A): boolean {
		// A new back node points backward to the former tail.
        const node: Node<undefined, A> = {
            value,
        };

        if (this.length === 0) {
            this.tail = node;
            this.head = this.tail;
        } else if (this.length === 1) {
            node.prev = this.tail;
            if(this.head) this.head.next = node;
            this.tail = node;
        } else {
            if(this.tail) this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;

        return true;
    }

    popFront(): Node<undefined, A> | undefined {
		// Empty lists have no front node to return.
        if(this.length == 0) {
            return undefined;
        }

        let temp: Node<undefined, A> | undefined = this.head

        // A singleton clears both ends; otherwise repair the new head back link.
        if(this.length === 1) {
            this.head = undefined;
            this.tail = undefined;
        } else {
            this.head = temp?.next;
            if(this.head) this.head.prev = undefined;
        }

        this.length--;

        return temp;
    }

    popBack(): Node<undefined, A> | undefined {
		// Empty lists have no back node to return.
        if(this.length === 0) {
            return undefined;
        }

        let temp: Node<undefined, A> | undefined = this.tail;

        // A singleton clears both ends; otherwise repair the new tail forward link.
        if(this.length === 1) {
            this.head = undefined;
            this.tail = undefined;
        } else {
            this.tail = temp?.prev;
            if(this.tail) this.tail.next = undefined
        }

        this.length--;

        return temp;
    }

    get(index: number): Node<undefined, A> | undefined {
		// Existing element indexes run from zero through length minus one.
        if(!Number.isInteger(index) || 0 > index || index >= this.length) {
            return undefined;
        }

        let temp: Node<undefined, A> | undefined = undefined;
        let n: number = 0;

        // Begin from the closer end to reduce the number of link traversals.
        if(index >= this.length / 2) {
            temp = this.tail;
            n = this.length - 1;
            while(index < n) {
                temp = temp?.prev;
                n--;
            }
        } else {
            temp = this.head;
            while(index > n) {
                temp = temp?.next;
                n++;
            }
        }

        return temp;
    }

    insert(index: number, value: A): boolean {
		// Insertion additionally permits index length, which appends at the back.
        if(!Number.isInteger(index) || 0 > index || index > this.length) {
            return false;
        }

        if(index === 0) {
            return this.pushFront(value);
        }

        if(index === this.length) {
            return this.pushBack(value);
        }

        let new_node: Node<undefined, A> = {
            value,
        };

        let temp: Node<undefined, A> | undefined = undefined;
        let n: number = 0;

        // Locate the node that will move one position to the right.
        if(index >= this.length / 2) {
            temp = this.tail;
            n = this.length - 1;
            while(index < n) {
                temp = temp?.prev;
                n--;
            }
        } else {
            temp = this.head;
            while(index > n) {
                temp = temp?.next;
                n++;
            }
        }

        // Splice the new node between the former predecessor and current node.
        new_node.next = temp;
        new_node.prev = temp?.prev;
        if (temp?.prev) temp.prev.next = new_node;
        if (temp?.prev) temp.prev = new_node;

        this.length++;

        return true;
    }

    remove(index: number): Node<undefined, A> | undefined {
		// Removal accepts only existing element indexes.
        if(!Number.isInteger(index) || 0 > index || index >= this.length) {
            return undefined;
        }

        if(index === 0) {
            return this.popFront();
        }

        if(index === this.length - 1) {
            return this.popBack();
        }

        let parent: Node<undefined, A> | undefined = undefined;
        let temp: Node<undefined, A> | undefined = undefined;
        let n: number = 0;

        // Traverse from the closer end, then reconnect both neighboring links.
        if(index >= this.length / 2) {
            temp = this.tail;
            n = this.length - 1;
            while(index < n) {
                parent = temp;
                temp = temp?.prev;
                n--;
            }

            if(temp?.prev) temp.prev.next = parent;
            if(parent) parent.prev = temp?.prev;
        } else {
            temp = this.head;
            while(index > n) {
                parent = temp;
                temp = temp?.next;
                n++;
            }

            if(temp?.next) temp.next.prev = parent;
            if(parent) parent.next = temp?.next;
        }

        this.length--;

        return temp;
    }

    size(): number {
		// Length is maintained by every successful mutation.
        return this.length;
    }

    isEmpty(): boolean {
		// Empty state follows directly from the maintained node count.
        return this.length == 0;
    }
};

export { DoublyLinkedList };
export default DoublyLinkedList;
