import type { Node, Edge } from "@ds/graphs/graph-view/graph-view";

type compareFunc<V> = (left: V | undefined, right: V | undefined) => number;

class BinarySearchTree<V> {
    root: Node<number, V> | undefined;
    count: number;
    next_key: number;
    compare: compareFunc<V>;

    constructor(compare: compareFunc<V>) {
        this.root = undefined;
        this.count = 0;
        this.next_key = 0;
        this.compare = compare;
    }

    insert(value: V): boolean {
        const node: Node<number, V> = { key: this.next_key, value, occurrences: 0 };
        // The first distinct value becomes the root without a traversal.
        if(this.count === 0) {
            this.root = node;
            this.count++;
            this.next_key++;
            return true;
        }

        let temp: Node<number, V> = this.root!;
        // Descend only while the ordered child needed for this value already exists.
        while(
            (this.compare(temp?.value, node?.value) > 0 && temp?.left !== undefined)
            || (this.compare(temp?.value, node?.value) < 0 && temp?.right !== undefined)
            && (this.compare(temp?.value, node?.value) !== 0)
        ) {
            if(this.compare(temp?.value, node?.value) > 0) temp = temp?.left!;
            else temp = temp?.right!;
        }

        // Attach a new ordered child or record another occurrence of an equal value.
        if(this.compare(temp?.value, node?.value) < 0) {
            temp.right = node;
            this.count++;
            this.next_key++;
        } else if (this.compare(temp?.value, node?.value) > 0) {
            temp.left = node;
            this.count++;
            this.next_key++;
        } else temp.occurrences!++;
        return true;
    }

    _find(value: V): { target: Node<number, V> | undefined, child_direction: string | undefined, parent: Node<number, V> | undefined } {
        let parent: Node<number, V> | undefined = undefined;
        let found: Node<number, V> | undefined = undefined;
        let child_direction: string | undefined = undefined;
        let temp: Node<number, V> | undefined = this.root;
        // Retain parent context so removal can reconnect the matching subtree.
        while(temp !== undefined && this.compare(temp?.value, value) !== 0) {
            if(this.compare(temp?.value, value) > 0) {
                parent = temp;
                child_direction = 'left';
                temp = temp?.left;
            } else {
                parent = temp;
                child_direction = 'right';
                temp = temp?.right;
            }
        }
        if(temp !== undefined) found = temp;
        return { target: found, child_direction, parent: typeof found !== 'undefined' ? parent : undefined };
    }

    find(value: V): Node<number, V> | undefined { return this._find(value)?.target; }
    contains(value: V): boolean { return !!this.find(value); }

    remove(value: V): boolean {
        const found = this._find(value);
        // Missing values leave the tree unchanged.
        if(typeof found?.target === 'undefined') return false;

        let parent: Node<number, V> | undefined = undefined;
        let replacement: Node<number, V> | undefined = undefined;
        // Use the leftmost node in the right subtree as the in-order successor.
        if(typeof found.target.right !== 'undefined') {
            replacement = found.target.right;
            while(typeof replacement?.left !== 'undefined') {
                parent = replacement;
                replacement = replacement?.left;
            }
            replacement.left = found.target.left;
            if(typeof parent !== 'undefined') {
                parent.left = replacement.right;
                replacement.right = found.target.right;
            }
        } else replacement = found.target.left;

        // Reconnect either the root reference or the parent's matching child.
        if(typeof found.parent != 'undefined') {
            if(found.child_direction === 'right') found.parent.right = replacement;
            else found.parent.left = replacement;
        } else this.root = replacement;
        this.count--;
        return true;
    }

    private recurse(node: Node<number, V> | undefined, visit: (node: Node<number, V> | undefined) => boolean): boolean {
        if(typeof node == 'undefined') return true;
        // In-order traversal visits lower values, then this node, then higher values.
        if(node.left && !this.recurse(node.left, visit)) return false;
        if(!visit(node)) return false;
        if(node.right && !this.recurse(node.right, visit)) return false;
        return true;
    }

    inOrder(visit: (node: Node<number, V> | undefined) => boolean): boolean { return this.recurse(this.root, visit); }
    size(): number { return this.count; }
    isEmpty(): boolean { return this.count === 0; }

    // Tree edges are directed from each parent to its children.
    directed(): boolean { return true; }
    nodeCount(): number { return this.size(); }

    nodeByKey(key: number): Node<number, V> | undefined {
        let this_node: Node<number, V> | undefined = undefined;
        // Stable keys are not comparator values, so search the complete tree.
        this.inOrder((node: Node<number, V> | undefined): boolean => {
            if(node?.key === key) {
                this_node = node;
                return false;
            }
            return true;
        });
        return this_node;
    }

    neighbors(node: Node<number, V>): Iterable<Edge<number, V>> {
        return [
            ...(node.left ? [{ from: node, to: node.left, weight: 1 }] : []),
            ...(node.right ? [{ from: node, to: node.right, weight: 1 }] : [])
        ];
    }
};

export { BinarySearchTree };
export default BinarySearchTree;
