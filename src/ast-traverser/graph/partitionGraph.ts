import {Graph} from './graph';

export function partitionGraph<T>(graph: Graph<T>) {
  const partitions = partition(graph);
  const graphs = new Array<Graph<T>>();

  partitions.forEach((partition) => {
    const graph = new Graph<T>();

    partition.forEach((vertex) => {
      const edges = graph['edges'].get(vertex)!; // TODO: hack, fix this
      graph.addEdges(vertex, Array.from(edges));
    });

    graphs.push(graph);
  });

  return graphs;
}

/**
 * Returns paritioned `vertex set` into connected
 * graphs
 */
function partition<T>(graph: Graph<T>) {
  const clusters = new Array<Set<T>>();

  graph.visitEdges((vertex) => {
    const currentCluster = new Set<T>();
    const clustersToMerge: [Set<T>, number][] = [];

    graph.dfs(vertex, (currentVertex) => {
      const found = findWithIndex(clusters, (cluster) =>
        cluster.has(currentVertex),
      );

      if (found === undefined) {
        currentCluster.add(currentVertex);
        return false;
      }
      clustersToMerge.push(found);

      return true;
    });

    // no prior clusters touched
    if (clustersToMerge.length === 0) {
      clusters.push(currentCluster);
      return;
    }

    // removing
    clustersToMerge.forEach(([_set, index]) => {
      clusters.splice(index, 1);
    });

    // merging
    let merged = clustersToMerge.reduce((prev, current) => {
      return new Set<T>([...Array.from(prev), ...Array.from(current[0])]);
    }, new Set<T>());

    merged = new Set<T>([...Array.from(merged), ...Array.from(currentCluster)]); // add clusterless verticies

    // adding
    clusters.push(merged);
  });

  return clusters;
}

/**
 * @return the first element with its index satisfying the condition
 */
function findWithIndex<T>(
  array: T[],
  predicate: (item: T) => boolean,
): [T, number] | undefined {
  const element = array.find(predicate);

  if (!element) return;

  const index = array.indexOf(element);
  return [element, index];
}
