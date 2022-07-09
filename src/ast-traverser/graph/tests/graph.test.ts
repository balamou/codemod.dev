import {Graph} from '../graph';

describe('Graph', () => {
  describe('addEdge', () => {
    it('adds both edge ends to the vertex set', () => {
      const graph = new Graph<string>();

      graph.addEdge('A', 'B');

      const vertexSet = Array.from(graph['verticies']);

      expect(vertexSet).toHaveLength(2);
      expect(vertexSet).toEqual(expect.arrayContaining(['A', 'B']));
    });

    it('adds edge only once to the vertex set', () => {
      const graph = new Graph<string>();

      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');

      const vertexSet = Array.from(graph['verticies']);

      expect(vertexSet).toHaveLength(3);
      expect(vertexSet).toEqual(expect.arrayContaining(['A', 'B', 'C']));
    });

    it('adds edge to the edge set', () => {
      const graph = new Graph<string>();

      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');

      expect(getEndPoints(graph, 'A')).toEqual(['B']);
      expect(getEndPoints(graph, 'B')).toEqual(['C']);
      expect(getEndPoints(graph, 'C')).toEqual([]);
    });

    it('adds edge to the edge set', () => {
      const graph = new Graph<string>();

      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('A', 'D');

      expect(getEndPoints(graph, 'A')).toHaveLength(3);
      expect(getEndPoints(graph, 'A')).toEqual(
        expect.arrayContaining(['C', 'B', 'D']),
      );
    });

    it('adds edge to the edge set only once', () => {
      const graph = new Graph<string>();

      graph.addEdge('A', 'B');
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');

      expect(getEndPoints(graph, 'A')).toEqual(['B']);
      expect(getEndPoints(graph, 'B')).toEqual(['C']);
      expect(getEndPoints(graph, 'C')).toEqual([]);
    });
  });

  describe('addEdges', () => {
    it('adds endpoints to edges', () => {
      const graph = new Graph<string>();
      graph.addEdges('A', ['B', 'C']);

      expect(getEndPoints(graph, 'A')).toHaveLength(2);
      expect(getEndPoints(graph, 'A')).toEqual(
        expect.arrayContaining(['C', 'B']),
      );
    });

    it("doesn't add anything when edges are empty", () => {
      const graph = new Graph<string>();
      graph.addEdges('A', []);

      const vertexSet = Array.from(graph['verticies']);

      expect(getEndPoints(graph, 'A')).toHaveLength(0);
      expect(vertexSet).toHaveLength(1);
      expect(vertexSet).toEqual(expect.arrayContaining(['A']));
    });
  });

  describe('dfs', () => {});

  describe('visitEdges', () => {});

  describe('visitVerticies', () => {});
});

function getEndPoints<T>(graph: Graph<T>, vertex: T) {
  return Array.from(graph['edges'].get(vertex)!);
}
