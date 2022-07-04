import './index.css';
import {main} from './main';

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
  main();
});
