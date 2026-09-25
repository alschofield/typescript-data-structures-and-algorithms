import type { GraphView, Node, Edge } from "@ds/graphs/graph-view/graph-view";
import { Queue } from "@ds/linear/queues/queue/queue";

const breadthFirstSearch = (graph: GraphView<any, any>, source: any, visit: (node: Node<any, any>) => boolean): Array<Node<any, any>> => {
    const result: Array<Node<any, any>> = [];
    const queue: Queue<Node<any, any>> = new Queue();

    if(graph.nodeCount() === 0) {
        return result;
    }

    const source_node = graph.nodeByKey(source);

    if(source_node) {
        queue.enqueue(source_node);

        while(!queue.isEmpty()) {
            const node: Node<any, any> | undefined = queue.dequeue();
            if(typeof node !== 'undefined') {
                result.push(node);
                if(visit(node)) {
                    const neighbors: Array<Edge<any, any>> = [...graph.neighbors(node)];
                    for (let i = 0; i < neighbors.length; i++) {
                        queue.enqueue(neighbors[i].to);
                    }
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    }

    return result;
} 

export { breadthFirstSearch };
export default breadthFirstSearch;
