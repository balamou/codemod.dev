import {inlineMapify} from '../utils/mapify';
import {Graph} from './graph';

export function mermaid<E>(graph: Graph<E>) {
  return inlineMapify(graph.visitEdges, (vertex, children) => {
    if (children.length === 0) return '';

    return `${vertex}-->${children.join(' & ')}`;
  }).join('\n');
}
