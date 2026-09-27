import type { Node, Edge, GraphView } from "@ds/graphs/graph-view/graph-view";
import { BinaryHeap } from "@ds/trees/heaps/binary-heap/binary-heap";

type DijkstraResult = {
    distances: Array<number>,
    parents: Array<number | undefined>,
}

type DijkstraNode<K, V> = {
    node: Node<K, V>,
    distance: number
}

const dijkstra = (graph: GraphView<number, any>, source: number): DijkstraResult | undefined => {
    // An empty graph cannot supply a valid source or any shortest-path result.
    if(graph.nodeCount() === 0) {
        return undefined;
    }

    // Infinity means a vertex has not yet been reached from the source.
    const distances: Array<number> = Array.from({ length: graph.nodeCount() }, () => Infinity);
    // Parents record the predecessor chosen by each best-distance relaxation.
    const parents: Array<number | undefined> = Array.from({ length: graph.nodeCount() }, () => undefined);
    // Smaller tentative distances must leave this min-heap first.
    const heap: BinaryHeap<DijkstraNode<number, any>> = new BinaryHeap((left: DijkstraNode<number, any> | undefined, right: DijkstraNode<number, any> | undefined): number => {
        if(left!.distance > right!.distance) {
            return 1;
        } else if (left!.distance < right!.distance) {
            return -1;
        } else {
            return 0;
        }
    })

    // Heap entries snapshot the tentative distance at the time they are queued.
    const source_node: DijkstraNode<number, any> = {
        node: graph.nodeByKey(source)!,
        distance: 0,
    }

    // The graph boundary decides whether the supplied dense source key exists.
    if(typeof source_node?.node === 'undefined') {
        return undefined;
    }

    // The source is the only vertex known to cost zero initially.
    distances[source] = 0;
    heap.push(source_node);
    while(!heap.isEmpty()) {
        const node: DijkstraNode<number, any> = heap.pop()!.value!;
        // A larger queued distance is stale after a later relaxation improved it.
        if (node!.distance! <= distances[node!.node!.key!]) {
            const neighbors: Array<Edge<number, any>> = [...graph.neighbors(node!.node!)];
            for(let i = 0; i < neighbors.length; i++) {
                // Dijkstra only accepts finite, non-negative edge weights.
                if(
                    !isNaN(neighbors[i].weight) &&
                    neighbors[i].weight >= 0 &&
                    neighbors[i].weight < Infinity
                ) {
                    // Relax through the current best source-to-node distance.
                    const new_distance = distances[node!.node!.key!] + neighbors[i].weight;
                    if (new_distance < distances[neighbors[i]!.to!.key!]) {
                        // Keep the improved distance, predecessor, and a fresh heap entry.
                        distances[neighbors[i]!.to!.key!] = new_distance;
                        parents[neighbors[i]!.to!.key!] = node!.node!.key!;
                        heap.push({
                            node: neighbors[i].to,
                            distance: new_distance,
                        });
                    }
                }
            }
        }
    }

    return {
        distances,
        parents,
    } as DijkstraResult;
};

export { dijkstra };
export default dijkstra;
