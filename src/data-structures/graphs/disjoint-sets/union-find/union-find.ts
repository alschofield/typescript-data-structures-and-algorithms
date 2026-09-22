import type { Node } from "@ds/graphs/graph-view/graph-view";

class UnionFind {
    capacity: number;
    unions: Array<Node<number, number>>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.unions = Array.from({ length: capacity }, (_, i) => ({ key: i, value: i, rank: 0, parent: undefined }));
    }

    find(key: number): Node<number, number> {
        // get the underlying parent for the union key is a part of
        let node = this.unions[key];
        while(typeof node.parent !== 'undefined') {
            node = node.parent;
        }

        return node;
    }

    union(a: number, b: number): boolean {
        const a_union = this.find(a);
        const b_union = this.find(b);

        if(a_union?.key !== b_union?.key) {
            // something like this
            if(a_union.rank! > b_union.rank!) {
                b_union.parent = a_union;
            } else if (b_union.rank! > a_union.rank!) {
                a_union.parent = b_union;
            } else {
                a_union.parent = b_union;
                b_union.rank = (b_union.rank ?? 0) + 1;
            }
        }

        return true;
    }

    connected(a: number, b: number): boolean {
        return this.find(a).key === this.find(b).key;
    }

    setCount(new_capacity: number): boolean {
        for (let i = this.capacity; i < new_capacity; i++) {
            this.unions.push({
                key: i,
                value: i,
                rank: 0,
                parent: undefined,
            });
        }

        return true;
    }

    size(): number {
        return this.capacity;
    }
};

export { UnionFind };
export default UnionFind;
