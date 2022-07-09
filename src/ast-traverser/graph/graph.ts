import {mapify} from '../utils/mapify';

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

  dfs(vertex: T, visit: (vertex: T) => boolean | undefined) {
    if (!this.verticies.has(vertex)) return;

    const stack = [vertex];
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
   * Visits all edges in an unspecified order
   */
  visitEdges = (fn: (vertex: T, children: T[]) => void) => {
    this.verticies.forEach((vertex) => {
      const children = this.edges.get(vertex);

      fn(vertex, Array.from(children ?? []));
    });
  };

  /**
   * Visits all verticies in an unspecified order
   */
  visitVerticies(fn: (vertex: T) => void) {
    this.verticies.forEach(fn);
  }
}

export function mermaid<U>(graph: Graph<U>) {
  const map = mapify(graph.visitEdges);

  return map((vertex, children) => {
    if (children.length === 0) return '';

    return `${vertex}-->${children.join(' & ')}`;
  }).join('\n');
}
