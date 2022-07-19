import {PluginItem} from '@babel/core';

import {Graph} from './graph/graph';
import {CapturedGlobals, singleFunctionVisitor} from './singleFunctionVisitor';
import {
  isFunctionDeclaration,
  isIdentifier,
  isVariableDeclaration,
} from './utils/typeGuards';

const isDefined = <T>(v: T | null | undefined): v is T => v != null;

export interface SharedObj {
  globalVars: string[];
  topLevelFunctions: string[];
  callGraph: Graph<string>;
  mutationGraph: Graph<string>;
}

export const functionsVisitor = (sharedObj: SharedObj) => (): PluginItem => {
  return {
    visitor: {
      Program(path) {
        sharedObj.globalVars = path.node.body
          .filter(isVariableDeclaration)
          .map((node) => node.declarations[0].id)
          .filter(isIdentifier)
          .map((id) => id.name);

        sharedObj.topLevelFunctions = path.node.body
          .filter(isFunctionDeclaration)
          .map((node) => node?.id?.name)
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

        const functionInformation: CapturedGlobals = {
          read: [], // global vars written to
          write: [], // global vars read from
          functions: [], // function calls
          functionName, // name of the current function under inspection
          topLevelFunctions: new Set(sharedObj.topLevelFunctions),
        };

        path.traverse(singleFunctionVisitor, {functionInformation});

        sharedObj.callGraph.addEdges(
          functionName,
          intersection(
            functionInformation.functions,
            sharedObj.topLevelFunctions,
          ),
        );

        sharedObj.mutationGraph.addEdges(
          functionName,
          functionInformation.write,
        );

        functionInformation.read.forEach((readVar) => {
          sharedObj.mutationGraph.addEdge(readVar, functionName);
        });

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

function difference<T>(arrayA: Array<T>, arrayB: Array<T>) {
  return arrayA.filter((item) => !arrayB.includes(item));
}

function intersection<T>(arrayA: Array<T>, arrayB: Array<T>) {
  return arrayA.filter((item) => arrayB.includes(item));
}
