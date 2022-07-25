import * as cytoscape from 'cytoscape';
import * as dagre from 'cytoscape-dagre';
import * as monaco from 'monaco-editor';

import {
  callGraphToViz,
  codeStatistics,
  mutationGraphToViz,
} from './ast-traverser/codeStatistics';
import {partitionGraph} from './ast-traverser/graph/partitionGraph';
import {edgecases, havby, postings, simple, view} from './samples';

export function main() {
  const editorContainer =
    document.querySelector<HTMLElement>('#monaco-editor')!;
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

  window.addEventListener('resize', () => {
    editor.layout();
  });

  const cytoscapeOptions: cytoscape.CytoscapeOptions = {
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
        selector: '.function',
        style: {
          'background-color': '#d6443a',
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
    container: document.querySelector<HTMLDivElement>('#graph'), // container to render in
    ...cytoscapeOptions,
  });

  let currentCall = 0;
  callGraphButton?.addEventListener('click', () => {
    cy.remove('node');
    const code = editor.getValue();
    const stats = codeStatistics(code); // TODO: put into webworker
    const graphs = partitionGraph(stats.callGraph);
    cy.add(callGraphToViz(graphs[currentCall]));
    currentCall = (currentCall + 1) % graphs.length;

    cy.fit();

    // More dagre options https://github.com/cytoscape/cytoscape.js-dagre
    cy.layout({name: 'dagre', rankDir: 'TB'} as any).run();
  });

  let current = 0;
  variablesGraphBtn?.addEventListener('click', () => {
    cy.remove('node');
    const code = editor.getValue();
    const stats = codeStatistics(code); // TODO: put into webworker
    const graphs = partitionGraph(stats.mutationGraph);
    cy.add(mutationGraphToViz(graphs[current]));
    current = (current + 1) % graphs.length;

    cy.fit();

    // More dagre options https://github.com/cytoscape/cytoscape.js-dagre
    cy.layout({name: 'dagre', rankDir: 'TB'} as any).run();
  });

  setupDropdownSamples(editor);
  setupResize();
}

const valueCodeMap = {
  simple,
  edgecases,
  havby,
  postings,
  view,
};

function setupDropdownSamples(editor: monaco.editor.IStandaloneCodeEditor) {
  const selectElement =
    document.querySelector<HTMLSelectElement>('#code-samples')!;

  Object.keys(valueCodeMap).map((key) => {
    const option = document.createElement('option');
    option.setAttribute('value', key);
    option.appendChild(document.createTextNode(key));

    selectElement.appendChild(option);
  });

  selectElement.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement;
    const key = target.value as keyof typeof valueCodeMap;

    const code = valueCodeMap[key];
    editor.setValue(code);
  });
}

const RESIZE_PADDING_PX = 300;

function setupResize() {
  const resizeArea = document.getElementById('resize-area')!;
  const resizeHighlight = document.getElementById('resize-highlight')!;

  let didClick = false;

  resizeArea.addEventListener('mousedown', () => {
    didClick = true;
  });

  document.body.addEventListener('mouseup', () => {
    didClick = false;
  });

  document.body.addEventListener('mousemove', (event) => {
    if (!didClick) {
      return;
    }

    const width = document.body.clientWidth;
    const leftPosition = Math.min(
      Math.max(event.x, RESIZE_PADDING_PX),
      width - RESIZE_PADDING_PX,
    );

    resizeArea.classList.remove('left-1/2');
    resizeArea.style.left = `${leftPosition}px`;
    resizeHighlight.classList.remove('left-1/2');
    resizeHighlight.style.left = `${leftPosition}px`;
  });
}
