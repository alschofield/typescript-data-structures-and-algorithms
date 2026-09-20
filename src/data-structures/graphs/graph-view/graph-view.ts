interface GraphView<K, V> {
    // Reports whether neighbor relationships have one direction or two.
    directed(): boolean;
    // Returns the number of dense numeric vertex indexes available to algorithms.
    nodeCount(): number;
    // Resolves a stable graph key or reports an absent node with undefined.
    nodeByKey(key: K): Node<K, V> | undefined;
    // Iterates representation-neutral weighted neighbors for one vertex index.
    neighbors(node: Node<K, V>): Iterable<Edge<K, V>>;
};

interface UndirectedEdgeGraphView<K, V> extends GraphView<K, V> {
    // Emits each logical undirected edge once for minimum-spanning-tree work.
    edges(): Iterable<Edge<K, V>>;
}

type Node<K, V> = {
    // Identifies this node across graph views and all node-backed structures.
    key?: K;
    // Retains the caller-owned payload without cloning it.
    value: V;

    // Counts trie terminal insertions that share this node.
    occurrences?: number;
    // Marks a trie node that terminates at least one stored word.
    isEndOfWord?: boolean;
    // Stores union-find rank for balanced component merging.
    rank?: number;

    // Links the next node in singly and doubly linked structures.
    next?: Node<K, V>;
    // Links the previous node in doubly linked structures.
    prev?: Node<K, V>;
    // Links the lower binary-search-tree child.
    left?: Node<K, V>;
    // Links the higher binary-search-tree child.
    right?: Node<K, V>;
    // Links tree ancestry or a union-find component parent.
    parent?: Node<K, V>;

    // Owns trie or general-tree child references.
    children?: Array<Node<K, V>> | Map<K, Node<K, V> | undefined>;
    // Owns outgoing graph edge references for adjacency-list traversal.
    edges?: Array<Edge<K, V>>;
};

type Edge<K, V> = {
    // Identifies the endpoint from which this directed edge originates.
    from: Node<K, V>;
    // Identifies the endpoint reached by this edge.
    to: Node<K, V>;
    // Stores the edge cost consumed by weighted graph algorithms.
    weight: number;
};

export { Node, Edge, GraphView, UndirectedEdgeGraphView };
export default GraphView;
