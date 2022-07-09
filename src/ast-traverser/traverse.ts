import * as babel from '@babel/standalone';
import * as cytoscape from 'cytoscape';

import {Graph} from './graph/graph';
import plugin, {SharedObj} from './plugin';

export function traverse(inputCode: string, cy: cytoscape.Core) {
  const sharedObj: SharedObj = {
    globalVars: [],
    topLevelFunctions: [],
    callGraph: new Graph<string>(),
  };

  babel.transform(inputCode, {
    plugins: [plugin(sharedObj)],
    code: true,
    ast: false,
  });

  sharedObj.callGraph.print();

  let edgeCount = 0;
  const addedVertecies = new Set<string>();

  sharedObj.callGraph.visitEdges((vertex, children) => {
    // { group: 'nodes', data: { id: 'n1' }, position: { x: 200, y: 200 } },
    // { group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } }
    if (!addedVertecies.has(vertex)) {
      cy.add({group: 'nodes', data: {id: vertex}});
      addedVertecies.add(vertex);
    }

    children.forEach((child) => {
      edgeCount++;

      if (!addedVertecies.has(child)) {
        cy.add({group: 'nodes', data: {id: child}});
        addedVertecies.add(child);
      }

      console.log(edgeCount);
      cy.add({
        group: 'edges',
        data: {id: 'e' + edgeCount, source: vertex, target: child},
      });
    });
  });

  cy.fit();
}
