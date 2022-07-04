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

  if (!editorContainer) {
    // log error
    return;
  }

  const editor = monaco.editor.create(editorContainer, {
    value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
    language: 'typescript',
    theme: 'vs-dark',
  });
});
