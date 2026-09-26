import type { Node } from "@ds/graphs/graph-view/graph-view";

class UnionFind {
    capacity: number;
    unions: Array<Node<number, number>>;

    constructor(capacity: number) {
        // Reject invalid capacities before allocating the element-backed forest.
        if (!Number.isSafeInteger(capacity) || capacity < 0) {
            throw new RangeError("capacity must be a non-negative safe integer");
        }

        this.capacity = capacity;
        // Start every element as a singleton component and its own representative.
        this.unions = Array.from({ length: capacity }, (_, i) => ({ key: i, value: i, rank: 0, parent: undefined }));
    }

    find(key: number): Node<number, number> {
        this.assertIndex(key);
        let node = this.unions[key];
        const path: Array<Node<number, number>> = [];
        // Follow parent links until reaching the component representative.
        while(typeof node.parent !== 'undefined') {
            path.push(node);
            node = node.parent;
        }

        // Flatten the discovered path so later lookups reach the representative directly.
        for (const member of path) {
            member.parent = node;
        }

        return node;
    }

    union(a: number, b: number): boolean {
        const a_union = this.find(a);
        const b_union = this.find(b);

        // Components already sharing a representative do not need another link.
        if(a_union.key === b_union.key) {
            return false;
        }

        // Attach the shallower root below the deeper root to limit tree height.
        if(a_union.rank! > b_union.rank!) {
            b_union.parent = a_union;
        } else if (b_union.rank! > a_union.rank!) {
            a_union.parent = b_union;
        } else {
            // Equal-height trees gain one level when either root becomes parent.
            a_union.parent = b_union;
            b_union.rank = (b_union.rank ?? 0) + 1;
        }

        return true;
    }

    connected(a: number, b: number): boolean {
        // Two elements are connected exactly when they share a representative.
        return this.find(a).key === this.find(b).key;
    }

    setCount(new_capacity: number): boolean {
        // Components may grow but shrinking would invalidate existing indexes.
        if (!Number.isSafeInteger(new_capacity) || new_capacity < this.capacity) {
            return false;
        }

        // Add each new index as an independent singleton component.
        for (let i = this.capacity; i < new_capacity; i++) {
            this.unions.push({
                key: i,
                value: i,
                rank: 0,
                parent: undefined,
            });
        }

        this.capacity = new_capacity;
        return true;
    }

    size(): number {
        return this.capacity;
    }

    private assertIndex(key: number): void {
        // All public element operations require an existing integer index.
        if (!Number.isSafeInteger(key) || key < 0 || key >= this.capacity) {
            throw new RangeError("key must be a valid element index");
        }
    }
};

export { UnionFind };
export default UnionFind;
