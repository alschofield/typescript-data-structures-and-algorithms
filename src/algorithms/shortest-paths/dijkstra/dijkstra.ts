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
    if(graph.nodeCount() === 0) {
        return undefined;
    }

    const distances: Array<number> = Array.from({ length: graph.nodeCount() }, () => Infinity);
    const parents: Array<number | undefined> = Array.from({ length: graph.nodeCount() }, () => undefined);
    const heap: BinaryHeap<DijkstraNode<number, any>> = new BinaryHeap((left: DijkstraNode<number, any> | undefined, right: DijkstraNode<number, any> | undefined): number => {
        if(left!.distance < right!.distance) {
            return 1;
        } else {
            return -1;
        }
    })

    const source_node: DijkstraNode<number, any> = {
        node: graph.nodeByKey(source)!,
        distance: 0,
    }

    if(typeof source_node?.node === 'undefined') {
        return undefined;
    }

    heap.push(source_node);
    while(!heap.isEmpty()) {
        const node: DijkstraNode<number, any> = heap.pop()!.value!;
        if (node!.distance! < distances[node!.node!.key!]) {
            const neighbors: Array<Edge<number, any>> = [...graph.neighbors(node!.node!)];
            for(let i = 0; i < neighbors.length; i++) {
                const new_distance = distances[node!.node!.key!] + neighbors[i].weight;
                if (new_distance < distances[neighbors[i]!.to!.key!]) {
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

    return {
        distances,
        parents,
    } as DijkstraResult;
};

export { dijkstra };
export default dijkstra;
