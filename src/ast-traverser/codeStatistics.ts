import * as babel from '@babel/standalone';
import * as cytoscape from 'cytoscape';

import {functionsVisitor, SharedObj} from './functionsVisitor';
import {Graph} from './graph/graph';

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
      data: {id: `e${source}-${target}`, source, target},
    });
  });

  return cytospace;
}

export function mutationGraphToViz(mutationGraph: Graph<string>) {
  const cytospace: cytoscape.ElementDefinition[] = [];

  mutationGraph.visitVerticies((vertex) => {
    cytospace.push({group: 'nodes', data: {id: vertex}});
  });

  mutationGraph.visitEachEdge((source, target) => {
    cytospace.push({
      group: 'edges',
      data: {id: `e${source}-${target}`, source, target},
    });
  });

  return cytospace;
}
