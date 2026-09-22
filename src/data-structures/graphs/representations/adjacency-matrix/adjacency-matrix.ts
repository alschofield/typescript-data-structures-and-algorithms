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
        this.is_directed = directed;
        this.compare = compare;
        this.node_count = 0;
        this.edge_count = 0;
        this.nodes = [];
        this.edges = [];
    }

    nodeAtKey(key: number): Node<number, V> | undefined {
        for (let i = 0; i < this.node_count; i++) {
            if(this.compare(key, this.nodes[i].key) === 0) {
                return this.nodes[i];
            }
        }
        
        return undefined;
    }

    addNode(key: number, value: V): boolean {
        const found = this.nodeAtKey(key);

        if(!!found) {
            found.occurrences = (found.occurrences ?? 1) + 1;
            return true;
        }

        const node: Node<number, V> = {
            key,
            value,
            index: this.node_count
        };

        this.nodes.push(node);

        const new_edges = Array.from({ length: this.nodes.length }, () => undefined);

        for (let i = 0; i < this.edges.length; i++) {
            this.edges[i].push(undefined);
        }

        this.edges.push(new_edges);

        this.node_count++;

        return true;
    }

    addEdge(from: number, to: number, weight: number): boolean {
        if(typeof this.edges[from][to] !== 'undefined') {
            return false;
        }

        const from_node = this.nodeAtKey(from);
        const to_node = this.nodeAtKey(to);

        if(!from_node || !to_node) {
            return false;
        }

        this.edges[from][to] = {
            from: from_node,
            to: to_node,
            weight,
        }

        if(!this.is_directed) {
            this.edges[to][from] = {
                from: to_node,
                to: from_node,
                weight
            }
        }
        
        return true;
    }

    neighbors(key: number, visit: (node: Node<number, V>) => boolean): boolean {
        for (let i = 0; i < this.edges[key].length; i++) {
            const edge = this.edges[key][i];
            if(typeof edge !== 'undefined') {
                if(!visit(edge.to)) {
                    return false
                }
            }
        }

        return true;
    }

    nodeCount(): number {
        return this.node_count;
    }

    edgeCount(): number {
        return this.edge_count;
    }

    directed(): boolean {
        return this.is_directed;
    }

    isEmpty(): boolean {
        return this.node_count === 0;
    }
};

export { AdjacencyMatrix };
export default AdjacencyMatrix;
