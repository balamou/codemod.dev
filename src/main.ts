import * as cytoscape from 'cytoscape';
import * as dagre from 'cytoscape-dagre';
// @ts-ignore
import klay from 'cytoscape-klay';
import * as monaco from 'monaco-editor';

import {
  callGraphToViz,
  codeStatistics,
  mutationGraphToViz,
} from './ast-traverser/codeStatistics';
import {partitionGraph} from './ast-traverser/graph/partitionGraph';
import {edgecases, havby, postings, simple, view} from './samples';

export function main() {
  const editorContainer = document.getElementById('monaco-editor')!;

  const callGraphButton = document.getElementById('call-graph-btn')!;
  const variablesGraphBtn = document.getElementById('variables-graph-btn')!;

  const editor = monaco.editor.create(editorContainer, {
    value: havby,
    language: 'typescript',
    theme: 'vs-dark',
  });

  window.addEventListener('resize', () => {
    editor.layout();
  });

  const cy = setupCytoscape();

  let currentCall = 0;
  callGraphButton.addEventListener('click', () => {
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
  variablesGraphBtn.addEventListener('click', () => {
    cy.remove('node');
    const code = editor.getValue();
    const stats = codeStatistics(code); // TODO: put into webworker
    const graphs = partitionGraph(stats.mutationGraph);
    cy.add(mutationGraphToViz(graphs[current]));
    current = (current + 1) % graphs.length;

    cy.fit();

    // More dagre options https://github.com/cytoscape/cytoscape.js-dagre
    cy.layout({
      name: 'klay',
      rankDir: 'TB',
      // ranker: 'longest-path',
    } as any).run();
  });

  setupDropdownSamples(editor);
  setupResize(editor);
}

function setupCytoscape() {
  const graphContainer = document.getElementById('graph')!;

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

  cytoscape.use(klay);
  cytoscape.use(dagre);

  return cytoscape({
    container: graphContainer, // container to render in
    ...cytoscapeOptions,
  });
}

const valueCodeMap = {
  simple,
  edgecases,
  havby,
  postings,
  view,
};

function setupDropdownSamples(editor: monaco.editor.IStandaloneCodeEditor) {
  const selectElement = document.getElementById('code-samples')!;

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

function setupResize(editor: monaco.editor.IStandaloneCodeEditor) {
  const resizeArea = document.getElementById('resize-area')!;
  const resizeHighlight = document.getElementById('resize-highlight')!;
  const editorContainer = document.getElementById('monaco-editor')!;
  const graphContainer = document.getElementById('graph')!;

  let didClick = false;
  let timer: any = undefined;

  resizeArea.addEventListener('mouseover', () => {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      resizeHighlight.classList.add('bg-blue-500');
      timer = undefined;
    }, 200);
  });

  resizeArea.addEventListener('mouseleave', () => {
    if (didClick) {
      return;
    }
    resizeHighlight.classList.remove('bg-blue-500');
    clearTimeout(timer);
    timer = undefined;
  });

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
    const percent = Math.round((leftPosition / width) * 1000) / 10;

    resizeArea.classList.remove('left-1/2');
    resizeArea.style.left = `${percent}%`;
    resizeHighlight.classList.remove('left-1/2');
    resizeHighlight.style.left = `${percent}%`;

    editorContainer.classList.remove('sm:w-1/2');
    editorContainer.style.width = `${percent}%`;
    graphContainer.style.width = `${100 - percent}%`;

    editor.layout();
    editor.layoutContentWidget;
  });
}
