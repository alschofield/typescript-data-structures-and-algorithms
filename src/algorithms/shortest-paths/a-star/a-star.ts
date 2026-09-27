import type { Node, Edge, GraphView } from '@ds/graphs/graph-view/graph-view';
import { BinaryHeap } from "@ds/trees/heaps/binary-heap/binary-heap";

type AStarNode = {
    node: Node<number, any>,
    g_score: number,
    f_score: number,
}

const aStar = (graph: GraphView<number, any>, source: number, goal: number, heuristic: (node: Node<number, any>) => number): Array<Node<number, any>> | undefined => {
    if(graph.nodeCount() === 0) {
        return undefined;
    }

    const heap: BinaryHeap<AStarNode> = new BinaryHeap((left: AStarNode | undefined, right: AStarNode | undefined) => {
        if(left!.f_score > right!.f_score) {
            return 1;
        } else if(left!.f_score < right!.f_score) {
            return -1;
        } else {
            if(left!.g_score > right!.g_score) {
                return 1;
            } else if(left!.g_score < right!.g_score) {
                return -1;
            } else {
                if(left!.node!.key! > right!.node!.key!) {
                    return 1;
                } else if(left!.node!.key! < right!.node!.key!) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
    })

    // Infinity marks vertices that have not yet received a source-to-vertex cost.
    const g_scores: Array<number> = Array.from({ length: graph.nodeCount() }, () => Infinity);
    // Parents retain the best known route for source-to-goal reconstruction.
    const parents: Array<Node<number, any> | undefined> = Array.from({ length: graph.nodeCount() }, () => undefined);
    const source_node = graph.nodeByKey(source);
    const goal_node = graph.nodeByKey(goal);

    if (
        typeof source_node === 'undefined' ||
        typeof goal_node === 'undefined'
    ) {
        return undefined;
    }

    if(source === goal) {
        return [source_node];
    }

    g_scores[source] = 0;
    heap.push({
        node: source_node,
        g_score: 0,
        f_score: heuristic(source_node),
    });

    while(!heap.isEmpty()) {
        const node: AStarNode = heap.pop()!.value!;

        // Later relaxations may leave an obsolete, higher-cost heap entry behind.
        if (node!.g_score > g_scores[node!.node!.key!]) {
            continue;
        }

        if(node!.node!.key! === goal) {
            break;
        }

        const neighbors: Array<Edge<number, any>> = [...graph.neighbors(node!.node)];
        for(let i = 0; i < neighbors.length; i++) {
            // A* supports finite non-negative weights, including zero-cost edges.
            if(
                !isNaN(neighbors[i].weight) &&
                neighbors[i].weight >= 0 &&
                neighbors[i].weight < Infinity
            ) {
                const new_g_score = g_scores[node!.node!.key!] + neighbors[i].weight;
                if(new_g_score < g_scores[neighbors[i]!.to!.key!]) {
                    parents[neighbors[i]!.to!.key!] = node!.node!;
                    g_scores[neighbors[i]!.to!.key!] = new_g_score;
                    heap.push({
                        node: neighbors[i].to,
                        g_score: new_g_score,
                        f_score: new_g_score + heuristic(neighbors[i].to)
                    });
                }
            }
        }
    }

    if(typeof parents[goal] === 'undefined') {
        return undefined;
    }

    // Walk backward through best-route parents, then return source-to-goal order.
    const path: Array<Node<number, any>> = [goal_node];
    let cursor: number = goal;
    while(cursor !== source) {
        path.push(parents[cursor]!);
        cursor = parents[cursor]!.key!;
    }

    return path.reverse();
};

export { aStar };
export default aStar;
