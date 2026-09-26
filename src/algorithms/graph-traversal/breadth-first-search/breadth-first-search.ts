import type { GraphView, Node, Edge } from "@ds/graphs/graph-view/graph-view";
import { Queue } from "@ds/linear/queues/queue/queue";

const breadthFirstSearch = (graph: GraphView<any, any>, source: any, visit: (node: Node<any, any>) => boolean): Array<Node<any, any>> => {
    const result: Array<Node<any, any>> = [];
    const queue: Queue<Node<any, any>> = new Queue();
    const visited = new Set<Node<any, any>>();

    // An empty graph has no reachable source or visit order.
    if(graph.nodeCount() === 0) {
        return result;
    }

    const source_node = graph.nodeByKey(source);

    // Only begin traversal when the requested source belongs to the graph.
    if(source_node) {
        queue.enqueue(source_node);
        visited.add(source_node);

        // Dequeue in discovery order to visit nodes one breadth level at a time.
        while(!queue.isEmpty()) {
            const node: Node<any, any> | undefined = queue.dequeue();
            // The queue contract permits undefined, so protect the traversal state.
            if(typeof node !== 'undefined') {
                result.push(node);
                // A true callback result permits expansion; false stops traversal early.
                if(visit(node)) {
                    const neighbors: Array<Edge<any, any>> = [...graph.neighbors(node)];
                    // Enqueue unseen outgoing endpoints exactly once to avoid cycles.
                    for (let i = 0; i < neighbors.length; i++) {
                        if (!visited.has(neighbors[i].to)) {
                            visited.add(neighbors[i].to);
                            queue.enqueue(neighbors[i].to);
                        }
                    }
                } else {
                    // The visitor requested early termination after this visit.
                    break;
                }
            } else {
                // An unexpected empty dequeue cannot yield another valid node.
                break;
            }
        }
    }

    return result;
} 

export { breadthFirstSearch };
export default breadthFirstSearch;
