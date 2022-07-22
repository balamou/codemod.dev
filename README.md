## Codemod

[codemod.dev](https://codemod.dev/)

This project aims to demostrate how global variables can significantly complicate the code. It does this by visually showing which functions read to and from global variables.

This project also shows how to refactor a large vanilla JS front-end client, that a beginner might've written. It aims to clean up the code through various codemods.

### Dependencies

- [monaco-editor](https://microsoft.github.io/monaco-editor/) - VSCode browser editor
- [@babel/standalone](https://babeljs.io/docs/en/babel-standalone) - Browser JS AST traversal
- [cytoscape](https://js.cytoscape.org/) - Diagram drawing tool
- [cytoscape-dagre](https://github.com/cytoscape/cytoscape.js-dagre) - Order Directed graphs hierarchically

### Issues

- [css-loader not loading fonts for the monaco editor](https://github.com/microsoft/monaco-editor/issues/2742#issuecomment-895465110)
  - possibly due to `file-loader` deprecation in Webpack 5.0
- [Critical dependency: the request of a dependency is an expression](https://github.com/babel/babel/issues/14301#issuecomment-1054299724)
  - Can be ignored at the moment (click x in the top right corner)
