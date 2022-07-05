import * as monaco from 'monaco-editor';
import {traverse} from './ast-traverser/traverse';
import * as cytoscape from 'cytoscape';
import * as dagre from 'cytoscape-dagre';

export function main() {
  const editorContainer =
    document.querySelector<HTMLElement>('.monaco-editor')!;
  const callGraphButton =
    document.querySelector<HTMLElement>('#call-graph-btn');
  const variablesGraphBtn = document.querySelector<HTMLElement>(
    '#variables-graph-btn',
  );

  const initialCode = `const data = { name: "John" };
  function main() {
    console.log("Hello world!");
  }
  
  const post = 10;
  const friends = [];
  `;

  const editor = monaco.editor.create(editorContainer, {
    value: initialCode,
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

    // editor.setValue(code.replace(/^\s+/gm, ''));

    traverse(code, cy);

    cy.layout({name: 'dagre'}).run();
  });
}
