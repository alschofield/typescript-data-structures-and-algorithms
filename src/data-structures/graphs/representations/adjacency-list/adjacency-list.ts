import type { Edge, Node } from "@ds/graphs/graph-view/graph-view";

type compareFunc<K, V> = (left: K | V | undefined, right: K | V | undefined) => number;

class AdjacencyList<K, V> {
    is_directed: boolean;
    compare: compareFunc<K, V>;
    node_count: number = 0;
    edge_count: number = 0;
    nodes: Array<Node<K, V>> = [];

    constructor(directed: boolean, compare: compareFunc<K, V>) {
        this.is_directed = directed;
        this.compare = compare;
        this.node_count = 0;
        this.edge_count = 0;
        this.nodes = [];
    }

    nodeByKey(key: K): Node<K, V> | undefined {
        // Scan the sparse node registry because keys need not equal array indexes.
        for (let i = 0; i < this.node_count; i++) if(this.compare(key, this.nodes?.[i]?.key) === 0) return this.nodes[i];
        return undefined;
    }

    addNode(key: K, value: V): boolean {
        const found = this.nodeByKey(key);
        if (!!found) {
            found.occurrences = (found.occurrences ?? 1) + 1;
            return true;
        }
        this.nodes.push({ key, value, index: this.node_count, occurrences: 1, edges: [] });
        this.node_count++;
        return true;
    }

    addEdge(from: K, to: K, weight: number): boolean {
        const from_node = this.nodeByKey(from);
        const to_node = this.nodeByKey(to);
        if(!!from_node && !!to_node) {
            // Reject duplicate logical edges by scanning this source's adjacency list.
            for (let i = 0; i < from_node.edges!.length; i++) if(this.compare(to, from_node.edges![i].to.key) === 0) return false;
            from_node.edges?.push({ from: from_node, to: to_node, weight });
            // Undirected graphs store the reciprocal edge while counting one logical edge.
            if(!this.is_directed) to_node.edges?.push({ from: to_node, to: from_node, weight });
            this.edge_count++;
            return true;
        }
        return false;
    }

    neighbors(key: K, visit: (node: Node<K, V> | undefined) => boolean): boolean;
    neighbors(node: Node<K, V>): Iterable<Edge<K, V>>;
    neighbors(keyOrNode: K | Node<K, V>, visit?: (node: Node<K, V> | undefined) => boolean): boolean | Iterable<Edge<K, V>> {
        // GraphView callers supply a node and receive its outgoing edge iterable directly.
        if (!visit) return (keyOrNode as Node<K, V>).edges ?? [];
        const node = this.nodeByKey(keyOrNode as K);
        // Stop and report false when the callback asks to terminate early.
        if(!!node) for (let i = 0; i < node.edges!.length; i++) if(!visit(node.edges![i].to)) return false;
        return true;
    }

    edgeCount(): number { return this.edge_count; }
    nodeCount(): number { return this.node_count; }
    directed(): boolean { return this.is_directed; }
    isEmpty(): boolean { return this.node_count === 0; }
}

export { AdjacencyList };
export default AdjacencyList;
