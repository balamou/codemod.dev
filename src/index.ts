import * as monaco from 'monaco-editor';
import './index.css';

// @ts-ignore
self.MonacoEnvironment = {
  // @ts-ignore
  getWorkerUrl: (_moduleId, label) => {
    if (label === 'json') {
      return './json.worker.bundle.js';
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return './css.worker.bundle.js';
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return './html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.bundle.js';
    }
    return './editor.worker.bundle.js';
  },
};

window.addEventListener('load', () => {
  const editorContainer = document.querySelector<HTMLElement>('.monaco-editor');
  const callGraphButton =
    document.querySelector<HTMLElement>('#call-graph-btn');
  const variablesGraphBtn = document.querySelector<HTMLElement>(
    '#variables-graph-btn',
  );

  if (!editorContainer) {
    // log error
    return;
  }

  const initialCode = `function x() {
    \tconsole.log("Hello world!");
  }`.replace(/^\s*/m, '');

  const editor = monaco.editor.create(editorContainer, {
    value: initialCode,
    language: 'typescript',
    theme: 'vs-dark',
  });

  callGraphButton?.addEventListener('click', () => {
    console.log(editor.getValue());
  });
});
