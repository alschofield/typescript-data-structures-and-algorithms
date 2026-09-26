import type { Node, Edge } from "@ds/graphs/graph-view/graph-view";

type compareFunc<V> = (left: number | V | undefined, right: number | V | undefined) => number;

class AdjacencyMatrix<V> {
    is_directed: boolean;
    node_count: number;
    edge_count: number;
    compare: compareFunc<V>;
    nodes: Array<Node<number, V>>;
    edges: Array<Array<Edge<number, V> | undefined>>;

    constructor(directed: boolean, compare: compareFunc<V>) {
        // Initialize an empty square matrix with caller-defined key equality.
        this.is_directed = directed;
        this.compare = compare;
        this.node_count = 0;
        this.edge_count = 0;
        this.nodes = [];
        this.edges = [];
    }

    nodeAtKey(key: number): Node<number, V> | undefined {
        // Keys may be sparse, so resolve them through the node registry.
        for (let i = 0; i < this.node_count; i++) {
            if(this.compare(key, this.nodes[i].key) === 0) return this.nodes[i];
        }
        return undefined;
    }

    nodeByKey(key: number): Node<number, V> | undefined {
        return this.nodeAtKey(key);
    }

    addNode(key: number, value: V): boolean {
        const found = this.nodeAtKey(key);
        // Repeated keys add an occurrence instead of another matrix row and column.
        if(!!found) {
            found.occurrences = (found.occurrences ?? 1) + 1;
            return true;
        }

        const node: Node<number, V> = { key, value, index: this.node_count };
        this.nodes.push(node);
        // Extend every old row, then append a new empty row to keep the matrix square.
        const new_edges = Array.from({ length: this.nodes.length }, () => undefined);
        for (let i = 0; i < this.edges.length; i++) this.edges[i].push(undefined);
        this.edges.push(new_edges);
        this.node_count++;
        return true;
    }

    addEdge(from: number, to: number, weight: number): boolean {
        // Resolve both sparse keys before mapping the edge into matrix coordinates.
        const from_node = this.nodeAtKey(from);
        const to_node = this.nodeAtKey(to);
        if(!from_node || !to_node) return false;

        const from_index = from_node.index!;
        const to_index = to_node.index!;
        // A populated cell already represents this directed logical edge.
        if(typeof this.edges[from_index][to_index] !== 'undefined') return false;

        this.edges[from_index][to_index] = { from: from_node, to: to_node, weight };
        // Undirected graphs mirror the edge into the reciprocal matrix cell.
        if(!this.is_directed) {
            this.edges[to_index][from_index] = { from: to_node, to: from_node, weight };
        }
        this.edge_count++;
        return true;
    }

    neighbors(key: number, visit: (node: Node<number, V>) => boolean): boolean;
    neighbors(node: Node<number, V>): Iterable<Edge<number, V>>;
    neighbors(keyOrNode: number | Node<number, V>, visit?: (node: Node<number, V>) => boolean): boolean | Iterable<Edge<number, V>> {
        const node = typeof keyOrNode === "number" ? this.nodeAtKey(keyOrNode) : keyOrNode;
        // Missing nodes have no outgoing neighbors and do not invoke callbacks.
        if (!node) return visit ? true : [];
        // Filter the node's matrix row into the compact GraphView edge iterable.
        if (!visit) return this.edges[node.index!].filter((edge): edge is Edge<number, V> => typeof edge !== "undefined");

        // Visit each populated matrix cell until the callback requests termination.
        for (let i = 0; i < this.edges[node.index!].length; i++) {
            const edge = this.edges[node.index!][i];
            if(typeof edge !== 'undefined' && !visit(edge.to)) return false;
        }
        return true;
    }

    nodeCount(): number { return this.node_count; }
    edgeCount(): number { return this.edge_count; }
    directed(): boolean { return this.is_directed; }
    isEmpty(): boolean { return this.node_count === 0; }
};

export { AdjacencyMatrix };
export default AdjacencyMatrix;
