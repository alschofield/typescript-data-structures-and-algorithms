import type { Node } from "@ds/graphs/graph-view/graph-view";

class SinglyLinkedList<A> {
    // References the first node; the list deliberately keeps no tail pointer.
    head: Node<undefined, A> | undefined;
    // Tracks the number of nodes so size and emptiness checks avoid traversal.
    length: number;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    pushFront(value: A): boolean {
		// The new node points at the old head before becoming the new front.
        const node: Node<undefined, A> = {
            value,
            next: this.head
        };

        this.head = node;
        this.length++;
        return true;
    }

    pushBack(value: A): boolean {
		// Without a tail pointer, append walks from head to the final node.
        const node: Node<undefined, A> = {
            value,
        };

        if (this.head == undefined) {
            this.head = node;
        } else {
            let temp: Node<undefined, A> = this.head;
            while(temp.next) {
                temp = temp.next;
            }

            temp.next = node;
        }

        this.length++;
        return true;
    }

    popFront(): Node<undefined, A> | undefined {
		// Advance head once; an empty list remains empty and keeps length at zero.
        const temp: Node<undefined, A> | undefined = this.head;
        this.head = temp?.next;
        if (temp) this.length--;
        return temp;
    }

    popBack(): Node<undefined, A> | undefined {
		// Empty and singleton lists are separate because no predecessor exists.
        if (this.length == 0) {
            return undefined;
        }
        
        let temp: Node<undefined, A> | undefined = this.head;
        let parent: Node<undefined, A> | undefined = undefined;

        if (this.length == 1) {
            return this.popFront();
        }

        // Stop with parent at the penultimate node and temp at the final node.
        while(temp?.next) {
            parent = temp;
            temp = temp?.next;
        }

        if (parent) parent.next = undefined;

        this.length--;
        return temp;
    }

    get(index: number): Node<undefined, A> | undefined {
		// Valid element indexes are zero through length - 1.
        if (!Number.isInteger(index) || 0 > index || index >= this.length) {
            return undefined;
        }

        let temp: Node<undefined, A> | undefined = this.head;
        let n = 0;
        // Move exactly index links so index zero remains the head.
        while(n < index) {
            if (temp?.next) temp = temp.next;
            n++;
        }

        return temp;
    }

    insert(index: number, value: A): boolean {
		// Insert permits index length for append, unlike get and remove.
        if (!Number.isInteger(index) || 0 > index || index > this.length) {
            return false;
        }

        if (index === 0) {
            return this.pushFront(value);
        }

        if (index === this.length) {
            return this.pushBack(value);
        }

        let temp: Node<undefined, A> | undefined = this.head;
        let parent: Node<undefined, A> | undefined = undefined;
        let n: number = 0;
        // Stop with parent before the insertion point and temp at that point.
        while(n < index) {
            parent = temp;
            temp = temp?.next;
            n++;
        }

        const new_node: Node<undefined, A> = {
            value,
            next: temp
        };

        if (parent) parent.next = new_node;
        this.length++;

        return true;
    }

    remove(index: number): Node<undefined, A> | undefined {
		// Removal accepts only existing element indexes.
        if (!Number.isInteger(index) || 0 > index || index >= this.length) {
            return undefined;
        }

        if (index == 0) {
            return this.popFront();
        }

        if (index == this.length - 1) {
            return this.popBack();
        }

        let temp: Node<undefined, A> | undefined = this.head;
        let parent: Node<undefined, A> | undefined = undefined;
        let n: number = 0;
        // Stop with parent before the node being removed.
        while(n < index) {
            parent = temp;
            temp = temp?.next;
            n++;
        }

        if (parent) parent.next = temp?.next;
        this.length--;

        return temp;
    }

    size(): number {
		// Length is maintained by mutations, so this lookup is constant time.
        return this.length;
    }

    isEmpty(): boolean {
		// Empty state follows directly from the maintained node count.
        return this.length === 0;
    }
};

export { SinglyLinkedList };
export default SinglyLinkedList;
