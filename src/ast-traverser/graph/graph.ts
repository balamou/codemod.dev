export class Graph<T> {
  private verticies: Set<T>;
  private edges: Map<T, Set<T>>;

  constructor() {
    this.verticies = new Set();
    this.edges = new Map();
  }

  private addVertex(vertex: T) {
    if (this.verticies.has(vertex)) {
      return;
    }

    this.verticies.add(vertex);
    this.edges.set(vertex, new Set());
  }

  addEdge(vertexFrom: T, vertexTo: T) {
    this.addVertex(vertexFrom);
    this.addVertex(vertexTo);

    const children = this.edges.get(vertexFrom);
    children?.add(vertexTo);
  }

  addEdges(parent: T, children: T[]) {
    this.addVertex(parent);
    const allChildren = this.edges.get(parent);

    children.forEach((child) => {
      this.addVertex(child);
      allChildren?.add(child);
    });
  }

  print() {
    this.verticies.forEach((vertex) => {
      const children = this.edges.get(vertex);

      if (!children) return;

      console.log(`${vertex}`, Array.from(children));
    });
  }

  mermaid() {
    let result = '';
    this.verticies.forEach((vertex) => {
      const children = this.edges.get(vertex);

      if (!children || children.size === 0) return;

      result += vertex;
      result += '-->';
      result += Array.from(children).join(' & ');
      result += '\n';
    });

    return result;
  }

  dfs(vertex: T, visit: (vertex: T) => boolean | undefined) {
    if (!this.verticies.has(vertex)) return;

    const stack: T[] = [vertex];
    const visited = new Set<T>();

    while (stack.length !== 0) {
      const currVertex = stack.pop();
      if (!currVertex || visited.has(currVertex)) continue;

      const skipChildren = visit(currVertex);
      visited.add(currVertex);

      if (skipChildren) {
        continue;
      }

      const children = this.edges.get(currVertex)!;

      stack.push(...Array.from(children));
    }
  }

  /**
   * Returns paritioned `vertex set` into connected
   * graphs
   */
  partition() {
    const clusters: Set<T>[] = [];

    this.verticies.forEach((vertex) => {
      const currentCluster = new Set<T>();
      const clustersToMerge: [Set<T>, number][] = [];

      this.dfs(vertex, (currentVertex) => {
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

      merged = new Set<T>([
        ...Array.from(merged),
        ...Array.from(currentCluster),
      ]); // add clusterless verticies

      // adding
      clusters.push(merged);
    });

    return clusters;
  }

  graphPartition() {
    const partitions = this.partition();
    const graphs: Graph<T>[] = [];

    partitions.forEach((partition) => {
      const graph = new Graph<T>();

      partition.forEach((vertex) => {
        const edges = this.edges.get(vertex)!;
        graph.addEdges(vertex, Array.from(edges));
      });

      graphs.push(graph);
    });

    return graphs;
  }

  /**
   * Visits all edges in an unspecified order
   */
  visitEdges(fn: (vertex: T, children: T[]) => void) {
    this.verticies.forEach((vertex) => {
      const children = this.edges.get(vertex);

      fn(vertex, Array.from(children ?? []));
    });
  }

  /**
   * Visits all verticies in an unspecified order
   */
  visitVerticies(fn: (vertex: T) => void) {
    this.verticies.forEach(fn);
  }
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
