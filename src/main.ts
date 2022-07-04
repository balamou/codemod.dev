import * as monaco from 'monaco-editor';

export function main() {
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
    console.log("Hello world!");
  }`;

  const editor = monaco.editor.create(editorContainer, {
    value: initialCode,
    language: 'typescript',
    theme: 'vs-dark',
  });

  callGraphButton?.addEventListener('click', () => {
    const code = editor.getValue();

    editor.setValue(code.replace(/^\s+/gm, ''));
  });
}
