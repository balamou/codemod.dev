import * as babel from '@babel/standalone';
import * as cytoscape from 'cytoscape';

import {functionsVisitor, SharedObj} from './functionsVisitor';
import {Graph} from './graph/graph';
import {decodeNode} from './utils/node';

export function codeStatistics(code: string) {
  const sharedObj: SharedObj = {
    globalVars: [],
    topLevelFunctions: [],
    callGraph: new Graph<string>(),
    mutationGraph: new Graph<string>(),
  };

  babel.transform(code, {
    plugins: [functionsVisitor(sharedObj)],
    code: true,
    ast: false,
  });

  return sharedObj;
}

export function callGraphToViz(callGraph: Graph<string>) {
  const cytospace: cytoscape.ElementDefinition[] = [];

  callGraph.visitVerticies((vertex) => {
    cytospace.push({group: 'nodes', data: {id: vertex}});
  });

  callGraph.visitEachEdge((source, target) => {
    cytospace.push({
      group: 'edges',
      data: {id: `e${source}-${target}`, source, target, color: 'red'},
    });
  });

  return cytospace;
}

export function mutationGraphToViz(mutationGraph: Graph<string>) {
  const cytospace: cytoscape.ElementDefinition[] = [];

  mutationGraph.visitVerticies((jsonVertex) => {
    const vertex = decodeNode(jsonVertex);

    cytospace.push({
      group: 'nodes',
      data: {id: vertex.value},
      classes: vertex.type,
    });
  });

  mutationGraph.visitEachEdge((jsonSource, jsonTarget) => {
    const source = decodeNode(jsonSource);
    const target = decodeNode(jsonTarget);

    cytospace.push({
      group: 'edges',
      data: {
        id: `e${source.value}-${target.value}`,
        source: source.value,
        target: target.value,
      },
    });
  });

  return cytospace;
}
