import { UndirectedEdgeGraphView, Edge } from "@ds/graphs/graph-view/graph-view";
import { UnionFind } from "@ds/graphs/disjoint-sets/union-find/union-find";
import { mergeSort } from "@alg/sorting/comparison/merge-sort/merge-sort";

const kruskal = (graph: UndirectedEdgeGraphView<number, any>): Array<Edge<number, any>> | undefined => {
    // An empty graph has no spanning forest to return under this API.
    if(graph.nodeCount() === 0) {
        return undefined;
    }

    // Track components by the graph's dense numeric node keys.
    const unionfind = new UnionFind(graph.nodeCount());
    // Copy the logical edges so sorting never mutates the graph view.
    const edges: Array<Edge<number, any>> = [...graph.edges()];

    // Reject the whole graph before sorting if any edge has an invalid weight.
    if(edges.some((edge) => !Number.isFinite(edge.weight))) {
        return undefined;
    }

    // Process cheaper edges first so every accepted edge is locally optimal.
    if(!mergeSort(edges, (left: Edge<number, any>, right: Edge<number, any>): number => left!.weight - right!.weight)) {
        return undefined;
    }

    const accepted: Array<Edge<number, any>> = [];
    for(let i = 0; i < edges.length; i++) {
        // Keep only edges that join distinct components and therefore avoid cycles.
        if(!unionfind.connected(edges[i].from.key!, edges[i].to.key!)) {
            accepted.push(edges[i]);
            unionfind.union(edges[i].from.key!, edges[i].to.key!);

            // A connected graph is complete once it contains V - 1 accepted edges.
            if(accepted.length === graph.nodeCount() - 1) {
                break;
            }
        }
    }

    return accepted;
};

export { kruskal };
export default kruskal;
