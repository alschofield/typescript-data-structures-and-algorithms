import type { Node } from "@ds/graphs/graph-view/graph-view";

class HashTable<K, V> {
	// Holds collision chains; each entry remains in exactly one bucket.
    buckets: Array<Array<Node<K, V>>>;
	// Counts distinct keys rather than total set operations.
    count: number;
    hash: (key:K | undefined) => number;
    equals: (left:K | undefined,right:K | undefined) => boolean;

    constructor(capacity: number, hash: (key: K | undefined) => number, equals: (left:K | undefined,right:K | undefined) => boolean) {
        if (!Number.isSafeInteger(capacity) || capacity <= 0) {
            throw new RangeError("capacity must be a positive safe integer");
        }

        this.count = 0;
        this.hash = hash;
        this.equals = equals;
        this.buckets = [...Array.from({ length: capacity }, () => ([]))];
    }

    set(key: K, value: V): boolean {
        const bucket: number = ((this.hash(key) % this.buckets.length) + this.buckets.length) % this.buckets.length;

        for(const item of this.buckets[bucket]) {
            if(this.equals(item?.key, key)) {
                item.value = value;
                return true;
            }
        }

        const new_node: Node<K, V> = {
            key,
            value,
        };

        this.buckets[bucket].push(new_node);
        this.count++;

        return true;
    }

    setResize(key: K, value: V): boolean {
        // Rehash before a new entry would exceed the configured load factor.
        if((this.count + 1) / this.buckets.length > 3 / 4) {
            const old_buckets: Array<Array<Node<K, V>>> = this.buckets
            const new_buckets: Array<Array<Node<K, V>>> = [...Array.from({ length: this.buckets.length * 2 }, () => ([]))]

            for(let bucket of old_buckets) {
                for(let item of bucket) {
                    new_buckets[((this.hash(item.key) % new_buckets.length) + new_buckets.length) % new_buckets.length].push(item);
                }
            }

            this.buckets = new_buckets;
        }

        return this.set(key, value);
    }

    get(key:K): V | undefined {
        const bucket: number = ((this.hash(key) % this.buckets.length) + this.buckets.length) % this.buckets.length;

        for(const item of this.buckets[bucket]) {
            if(this.equals(item?.key, key)) {
                return item.value;
            }
        }

        return undefined;
    }

    remove(key:K): Node<K, V> | undefined {
        const bucket: number = ((this.hash(key) % this.buckets.length) + this.buckets.length) % this.buckets.length;
        let found: Node<K, V> | undefined = undefined;

        this.buckets[bucket] = this.buckets[bucket].filter((node: Node<K, V>) => {
            if (this.equals(node.key, key)) {
                found = node;
                this.count--;
                return false;
            }

            return true;
        });

        return found;
    }

    contains(key: K): boolean {
        const bucket: number = ((this.hash(key) % this.buckets.length) + this.buckets.length) % this.buckets.length;

        for(const item of this.buckets[bucket]) {
            if(this.equals(item?.key, key)) {
                return true;
            }
        }

        return false;
    }

    size(): number {
        return this.count;
    }

    capacity(): number {
        return this.buckets.length;
    }

    isEmpty(): boolean {
        return this.size() === 0
    }
};

export { HashTable };
export default HashTable;
