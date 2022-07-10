import * as babel from '@babel/standalone';
import * as cytoscape from 'cytoscape';

import {Graph} from './graph/graph';
import plugin, {SharedObj} from './plugin';

function codeStatistics(code: string) {
  const sharedObj: SharedObj = {
    globalVars: [],
    topLevelFunctions: [],
    callGraph: new Graph<string>(),
  };

  babel.transform(code, {
    plugins: [plugin(sharedObj)],
    code: true,
    ast: false,
  });

  sharedObj.callGraph.print(); // env
  return sharedObj.callGraph;
}

function callGraphToViz(callGraph: Graph<string>) {
  const everything: cytoscape.ElementDefinition[] = [];

  callGraph.visitVerticies((vertex) => {
    everything.push({group: 'nodes', data: {id: vertex}});
  });

  callGraph.visitEachEdge((source, target) => {
    everything.push({
      group: 'edges',
      data: {id: `e${source}-${target}`, source, target},
    });
  });

  return everything;
}

export function traverse(inputCode: string, cy: cytoscape.Core) {
  const callGraph = codeStatistics(inputCode); // TODO: put into webworker
  cy.add(callGraphToViz(callGraph));
  cy.fit();
}
