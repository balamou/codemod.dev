import * as cytoscape from 'cytoscape';
import * as dagre from 'cytoscape-dagre';
import * as monaco from 'monaco-editor';

import {traverse} from './ast-traverser/traverse';

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

  const darkModeStyle = `
  node {
    width: 40;
    height: 40;
    font-size: 9;
    font-weight: bold;
    min-zoomed-font-size: 4;
    label: data(id);
    text-wrap: wrap;
    text-max-width: 50;
    text-valign: center;
    text-halign: center;
    text-events: yes;
    color: #000;
    text-outline-width: 1;
    text-outline-color: #fff;
    text-outline-opacity: 1;
    overlay-color: #fff;

    background-color: #FACD37;
    text-outline-color: #FACD37;
  }

  edge {
    curve-style: haystack;
    haystack-radius: 0;
    opacity: 0.333;
    width: 2;
    z-index: 0;
    overlay-opacity: 0;
    target-arrow-color: #ccc;
    target-arrow-shape: triangle;
  }
  ` as any;

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

    // More dagre options https://github.com/cytoscape/cytoscape.js-dagre
    cy.layout({name: 'dagre', rankDir: 'TB'} as any).run();
  });
}
