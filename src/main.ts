import * as monaco from 'monaco-editor';
import {traverse} from './ast-traverser/traverse';
import * as cytoscape from 'cytoscape';

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

  callGraphButton?.addEventListener('click', () => {
    const code = editor.getValue();

    // editor.setValue(code.replace(/^\s+/gm, ''));

    traverse(code);
  });

  const cytoscapeOptions = {
    elements: [
      // list of graph elements to start with
      {
        // node a
        data: {id: 'a'},
      },
      {
        // node b
        data: {id: 'b'},
      },
      {
        // edge ab
        data: {id: 'ab', source: 'a', target: 'b'},
      },
    ],
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
      rows: 1,
    },
  };

  const cy = cytoscape({
    container: document.querySelector<HTMLDivElement>('.graph'), // container to render in
    ...cytoscapeOptions,
  });
}
