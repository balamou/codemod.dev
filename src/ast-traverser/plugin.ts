import {PluginItem} from '@babel/core';
import {
  FunctionDeclaration,
  Identifier,
  VariableDeclaration,
} from '@babel/types';

import {GlobalVarsVisitor} from './globalVarsVisitor';
import {Graph} from './graph/graph';

const isDefined = <T>(v: T | null | undefined): v is T => !v;

export interface SharedObj {
  globalVars: string[];
  topLevelFunctions: string[];
  callGraph: Graph<string>;
}

export interface CapturedGlobals {
  read: string[];
  write: string[];
  functions: string[];
  functionName: string;
  topLevelFunctions: Set<string>;
}

export default (sharedObj: SharedObj) => (): PluginItem => {
  return {
    visitor: {
      Program(path) {
        sharedObj.globalVars = path.node.body
          .filter(
            (node): node is VariableDeclaration =>
              node.type === 'VariableDeclaration',
          )
          .map((node) => node.declarations[0].id)
          .filter((id): id is Identifier => id.type === 'Identifier')
          .map((id) => id.name);

        sharedObj.topLevelFunctions = path.node.body
          .filter(
            (node): node is FunctionDeclaration =>
              node.type === 'FunctionDeclaration',
          )
          .map((node) => (node.id ? node.id.name : null))
          .filter(isDefined);
      },
      FunctionDeclaration(path) {
        const functionName = path.node.id?.name;

        if (!functionName) {
          // TODO: log that there is a function declaration with no name
          return;
        }

        const isTopLevelFunction = path.parent.type === 'Program';
        if (!isTopLevelFunction) {
          // Only do top level functions.
          // Skip functions declared within functions
          return;
        }

        const globalVariables: CapturedGlobals = {
          read: [], // global vars written to
          write: [], // global vars read from
          functions: [], // function calls
          functionName, // name of the current function under inspection
          topLevelFunctions: new Set(sharedObj.topLevelFunctions),
        };

        path.traverse(GlobalVarsVisitor, {globalVariables});

        sharedObj.callGraph.addEdges(functionName, globalVariables.functions);

        // const {
        //   onlyInA: onlyRead,
        //   onlyInB: onlyWritten,
        //   inBoth: readWrite,
        // } = setOperations(globalVariables.read, globalVariables.write);

        // edges.push({
        //   funcName: functionName,
        //   to: globalVariables.functions,
        //   read: onlyRead,
        //   write: onlyWritten,
        //   readWrite: readWrite,
        // });
      },
    },
  };
};
