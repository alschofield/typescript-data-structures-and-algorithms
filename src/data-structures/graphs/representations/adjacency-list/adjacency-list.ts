import type { Node, Edge } from "@ds/graphs/graph-view/graph-view";

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
        for (let i = 0; i < this.node_count; i++) {
            if(this.compare(key, this.nodes?.[i]?.key) === 0) {
                return this.nodes[i];
            }
        }

        return undefined;
    }

    addNode(key: K, value: V): boolean {
        const found = this.nodeByKey(key);
        
        if (!!found) {
            found.occurrences = (found.occurrences ?? 1) + 1;
            return true;
        }
        
        this.nodes.push({
            key,
            value,
            occurrences: 1,
            edges: []
        });

        return true;
    }

    addEdge(from: K, to: K, weight: number): boolean {
        const from_node = this.nodeByKey(from);
        const to_node = this.nodeByKey(to);

        if(!!from_node && !!to_node) {
            for (let i = 0; i < from_node!.edges!.length; i++) {
                if(this.compare(to, from_node!?.edges!?.[i]!?.to!?.key) === 0) {
                    return false;
                }
            }

            from_node.edges?.push({
                from: from_node,
                to: to_node,
                weight
            });

            if(!this.is_directed) {
                to_node.edges?.push({
                    from: to_node,
                    to: from_node,
                    weight
                });
            }

            return true;
        } else {
            return false;
        }
    }

    neighbors(key: K, visit: (node: Node<K, V> | undefined) => boolean): boolean {
        const node = this.nodeByKey(key);

        if(!!node) {
            for (let i = 0; i < node!.edges!.length; i++) {
                const edge = node!.edges![i];
                if(!visit(edge.to)) {
                    return false;
                }
            }
        }
        
        return true;
    }

    edgeCount(): number {
        return this.edge_count;
    }

    nodeCount(): number {
        return this.node_count;
    }

    directed(): boolean {
        return this.is_directed;
    }

    isEmpty(): boolean {
        return this.node_count === 0;
    }
}

export { AdjacencyList };
export default AdjacencyList;
