interface GraphView<A> {
    // Reports whether neighbor relationships have one direction or two.
    directed(): boolean;
    // Returns the number of dense numeric vertex indexes available to algorithms.
    nodeCount(): number;
    // Resolves a stable graph key or reports an absent node with undefined.
    nodeByKey(key: number): Node<A> | undefined;
    // Iterates representation-neutral weighted neighbors for one vertex index.
    neighbors(node: Node<A>): Iterable<Edge<A>>;
};

interface UndirectedEdgeGraphView<A> extends GraphView<A> {
    // Emits each logical undirected edge once for minimum-spanning-tree work.
    edges(): Iterable<Edge<A>>;
}

type Node<A> = {
    // Identifies this node across graph views and all node-backed structures.
    key?: number;
    // Retains the caller-owned payload without cloning it.
    value: A;

    // Counts trie terminal insertions that share this node.
    occurrences?: number;
    // Marks a trie node that terminates at least one stored word.
    isEndOfWord?: boolean;
    // Stores union-find rank for balanced component merging.
    rank?: number;

    // Links the next node in singly and doubly linked structures.
    next?: Node<A>;
    // Links the previous node in doubly linked structures.
    prev?: Node<A>;
    // Links the lower binary-search-tree child.
    left?: Node<A>;
    // Links the higher binary-search-tree child.
    right?: Node<A>;
    // Links tree ancestry or a union-find component parent.
    parent?: Node<A>;

    // Owns trie or general-tree child references.
    children?: Array<Node<A>>;
    // Owns outgoing graph edge references for adjacency-list traversal.
    edges?: Array<Edge<A>>;
};

type Edge<A> = {
    // Identifies the endpoint from which this directed edge originates.
    from: Node<A>;
    // Identifies the endpoint reached by this edge.
    to: Node<A>;
    // Stores the edge cost consumed by weighted graph algorithms.
    weight: number;
};

export { Node, Edge, GraphView, UndirectedEdgeGraphView };
export default GraphView;
