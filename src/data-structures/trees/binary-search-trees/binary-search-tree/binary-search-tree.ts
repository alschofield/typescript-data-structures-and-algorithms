import type { Node } from "@ds/graphs/graph-view/graph-view";

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
        const node: Node<number, V> = {
            key: this.next_key,
            value,
            occurrences: 0,
        }
        
        if(this.count === 0) {
            this.root = node;
            this.count++;
            this.next_key++;
            return true;
        }

        let temp: Node<number, V> = this.root!;

        while(
            (this.compare(temp?.value, node?.value) > 0 && temp?.left !== undefined)
            || (this.compare(temp?.value, node?.value) < 0 && temp?.right !== undefined)
            && (this.compare(temp?.value, node?.value) !== 0)
        ) {
            if(this.compare(temp?.value, node?.value) > 0) {
                temp = temp?.left!;
            } else {
                temp = temp?.right!;
            }
        }

        if(this.compare(temp?.value, node?.value) < 0) {
            temp.right = node;
            this.count++;
            this.next_key++;
        } else if (this.compare(temp?.value, node?.value) > 0) {
            temp.left = node;
            this.count++;
            this.next_key++;
        } else {
            temp.occurrences!++;
        }

        return true;
    }

    _find(value: V): { target: Node<number, V> | undefined, child_direction: string | undefined, parent: Node<number, V> | undefined } {
        let parent: Node<number, V> | undefined = undefined;
        let found: Node<number, V> | undefined = undefined;
        let child_direction: string | undefined = undefined;
        let temp: Node<number, V> | undefined = this.root;

        while(
            temp !== undefined &&
            this.compare(temp?.value, value) !== 0
        ) {
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

        if(temp !== undefined) {
            found = temp;
        }

        return { target: found, child_direction, parent: typeof found !== 'undefined' ? parent : undefined };
    }

    find(value: V): Node<number, V> | undefined {
        return this._find(value)?.target
    }

    contains(value: V): boolean {
        return !!this.find(value);
    }

    remove(value: V): boolean {
        const found = this._find(value);

        if(typeof found?.target !== 'undefined') {
            let parent: Node<number, V> | undefined = undefined;
            let replacement: Node<number, V> | undefined = undefined;
            if(typeof found?.target?.right !== 'undefined') {
                replacement = found?.target?.right;
                while(typeof replacement?.left !== 'undefined') {
                    parent = replacement;
                    replacement = replacement?.left;
                }

                if(typeof parent !== 'undefined') parent.left = replacement.right;
                replacement.right = found.target.right;
            } else {
                replacement = found?.target?.left;
            }

            if(typeof found?.parent != 'undefined') {
                if(found?.child_direction === 'right') {
                    found.parent.right = replacement;
                } else {
                    found.parent.left = replacement;
                }
            } else {
                this.root = replacement;
            }

            return true;
        } else {
            return false;
        }
    }

    private recurse(node: Node<number, V> | undefined, visit: (node: Node<number, V> | undefined) => boolean): boolean {
        if(typeof node == 'undefined') return true;

        if(node?.left) this.recurse(node?.left, visit);
        visit(node);
        if(node.right) this.recurse(node?.right, visit);

        return false;
    }

    inOrder(visit: (node: Node<number, V> | undefined) => boolean): boolean {
        return this.recurse(this.root, visit)
    }

    size(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    // graph view methods
    directed(): boolean {
        return false;
    }

    nodeCount(): number {
        return this.size();
    }
};

export { BinarySearchTree };
export default BinarySearchTree;
