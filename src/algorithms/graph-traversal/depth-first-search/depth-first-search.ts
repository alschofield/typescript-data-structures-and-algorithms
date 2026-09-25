import type { GraphView, Node, Edge } from "@ds/graphs/graph-view/graph-view";
import { Stack } from "@ds/linear/stacks/stack/stack";

const depthFirstSearch = (graph: GraphView<any, any>, source: any, visit: (node: Node<any, any>) => boolean): Array<Node<any, any>> => {
    const result: Array<Node<any, any>> = [];
    const stack: Stack<Node<any, any>> = new Stack();

    if(graph.nodeCount() === 0) {
        return result;
    }

    const source_node = graph.nodeByKey(source);
    if(typeof source_node !== 'undefined') {
        stack.push(source_node);
        while(!stack.isEmpty()) {
            const node = stack.pop();
            if(typeof node !== 'undefined') {
                result.push(node);
                if(visit(node)) {
                    const neighbors: Array<Edge<any, any>> = [...graph.neighbors(node)]
                    for (let i = 0; i < neighbors.length; i++) {
                        stack.push(neighbors[i].to);
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
};

export { depthFirstSearch };
export default depthFirstSearch;
