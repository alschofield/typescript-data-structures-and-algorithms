import type { GraphView, Node, Edge } from "@ds/graphs/graph-view/graph-view";
import { Stack } from "@ds/linear/stacks/stack/stack";

const depthFirstSearch = (graph: GraphView<any, any>, source: any, visit: (node: Node<any, any>) => boolean): Array<Node<any, any>> => {
    const result: Array<Node<any, any>> = [];
    const stack: Stack<Node<any, any>> = new Stack();
    const visited = new Set<Node<any, any>>();

    // An empty graph has no reachable source or visit order.
    if(graph.nodeCount() === 0) {
        return result;
    }

    const source_node = graph.nodeByKey(source);
    // Only begin traversal when the requested source belongs to the graph.
    if(typeof source_node !== 'undefined') {
        stack.push(source_node);
        visited.add(source_node);
        // Pop the most recently discovered node to explore one branch deeply.
        while(!stack.isEmpty()) {
            const node = stack.pop();
            // The stack contract permits undefined, so protect the traversal state.
            if(typeof node !== 'undefined') {
                result.push(node);
                // A true callback result permits expansion; false stops traversal early.
                if(visit(node)) {
                    const neighbors: Array<Edge<any, any>> = [...graph.neighbors(node)];
                    // Push in reverse so stack pop order preserves neighbor iteration order.
                    for (let i = neighbors.length - 1; i >= 0; i--) {
                        if (!visited.has(neighbors[i].to)) {
                            visited.add(neighbors[i].to);
                            stack.push(neighbors[i].to);
                        }
                    }
                } else {
                    // The visitor requested early termination after this visit.
                    break;
                }
            } else {
                // An unexpected empty pop cannot yield another valid node.
                break;
            }
        }
    }

    return result;
};

export { depthFirstSearch };
export default depthFirstSearch;
