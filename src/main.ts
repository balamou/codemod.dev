import * as cytoscape from 'cytoscape';
import * as dagre from 'cytoscape-dagre';
import * as monaco from 'monaco-editor';

import {
  callGraphToViz,
  codeStatistics,
  mutationGraphToViz,
} from './ast-traverser/traverse';
// @ts-ignore
import edgecases from './samples/edgecases.sample.js';
// @ts-ignore
import havby from './samples/havby.sample.js';
// @ts-ignore
import simple from './samples/simple.sample.js';

export function main() {
  const editorContainer =
    document.querySelector<HTMLElement>('.monaco-editor')!;
  const callGraphButton =
    document.querySelector<HTMLElement>('#call-graph-btn');
  const variablesGraphBtn = document.querySelector<HTMLElement>(
    '#variables-graph-btn',
  );

  const editor = monaco.editor.create(editorContainer, {
    value: havby,
    language: 'typescript',
    theme: 'vs-dark',
  });

  const cytoscapeOptions = {
    style: [
      // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': '#666',
          label: 'data(id)',
        },
      },

      {
        selector: 'edge',
        style: {
          width: 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
        },
      },
    ],
    layout: {
      name: 'grid',
    },
  };

  cytoscape.use(dagre);

  const cy = cytoscape({
    container: document.querySelector<HTMLDivElement>('.graph'), // container to render in
    ...cytoscapeOptions,
  });

  callGraphButton?.addEventListener('click', () => {
    const code = editor.getValue();
    const stats = codeStatistics(code); // TODO: put into webworker
    cy.add(callGraphToViz(stats.callGraph));
    cy.fit();

    // More dagre options https://github.com/cytoscape/cytoscape.js-dagre
    cy.layout({name: 'dagre', rankDir: 'TB'} as any).run();
  });

  variablesGraphBtn?.addEventListener('click', () => {
    cy.remove('node');
    const code = editor.getValue();
    const stats = codeStatistics(code); // TODO: put into webworker
    cy.add(mutationGraphToViz(stats.mutationGraph));
    cy.fit();

    // More dagre options https://github.com/cytoscape/cytoscape.js-dagre
    cy.layout({name: 'dagre', rankDir: 'TB'} as any).run();
  });
}
