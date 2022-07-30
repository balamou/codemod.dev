# Codemod

[codemod.dev](https://codemod.dev/)

This project aims to demostrate how global variables can significantly complicate the code. It does this by visually showing which functions read to and from global variables.

This project also shows how to refactor a large vanilla JS front-end client, that a beginner might've written. It aims to clean up the code through various codemods.

- Overview video TBA

## Architecture

`src/main.ts`: setup code that runs on window load. This is where all the DOM setup and even callback bindings happen, as well as setting up the `monaco` editor and `cytoscape` graph visualizer. Currently I am not using any front-end framework or state management. The code in this file doesn't follow any particular patterns, but as more code will be added it will be adapted to [this pattern](https://javascript.plainenglish.io/the-basic-vanilla-js-project-setup-9290dce6403f) for Vanilla JS projects.

`src/ast-traverser/codeStatistics.ts`: is responsible for using babel and a custom plugin to process code (passed as a string). It returns an [object](https://github.com/balamou/codemod.dev/blob/main/src/ast-traverser/functionsVisitor.ts#L14-L19) that contains global variables, top level functions, a call graph and a mutation [graph](https://github.com/balamou/codemod.dev/blob/main/src/ast-traverser/graph/graph.ts):

```ts
export interface SharedObj {
  globalVars: string[];
  topLevelFunctions: string[];
  callGraph: Graph<string>;
  mutationGraph: Graph<string>;
}
```

`src/ast-traverser/functionsVisitor.ts`: the custom plugin that is called in `codeStatistics`. It traverses the code AST and finds global variables and top-level functions. There is another traverser that traverses each individual functions called `singleFunctionVisitor`.

`src/ast-traverser/singleFunctionVisitor.ts`: traverses a single function to find which global variables it read from and modifies. It also lists all top-level functions that it calls.

## Dependencies

- [monaco-editor](https://microsoft.github.io/monaco-editor/) - VSCode browser editor
- [@babel/standalone](https://babeljs.io/docs/en/babel-standalone) - Browser JS AST traversal
- [cytoscape](https://js.cytoscape.org/) - Diagram drawing tool
- [cytoscape-dagre](https://github.com/cytoscape/cytoscape.js-dagre) - Order Directed graphs hierarchically
- [cytoscape-klay](https://github.com/cytoscape/cytoscape.js-klay) - Order nodes

## Issues

- [css-loader not loading fonts for the monaco editor](https://github.com/microsoft/monaco-editor/issues/2742#issuecomment-895465110)
  - possibly due to `file-loader` deprecation in Webpack 5.0
- [Critical dependency: the request of a dependency is an expression](https://github.com/babel/babel/issues/14301#issuecomment-1054299724)
  - Fixed by ignoring using webpack `ignoreWarnings` ([here](https://github.com/balamou/codemod.dev/blob/main/webpack.dev.js#L29-L34))
