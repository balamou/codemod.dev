import {NodePath, Visitor} from '@babel/core';
import {Identifier, LVal} from '@babel/types';

import {
  findLeftMostName,
  isPartOfPerformingACall,
  isReferencedInTheLeftExpression,
  isVariableDefinedWithin,
} from './helpers';
import {CapturedGlobals} from './plugin';
import {isIdentifier, isMemberExpression} from './utils/typeGuards';

type ReferencedVisitor<T> = Visitor<T> & {
  ReferencedIdentifier: (this: T, path: NodePath<Identifier>) => void;
};

function getLeftValName(leftNode: LVal) {
  if (isIdentifier(leftNode)) {
    return leftNode.name;
  }

  if (isMemberExpression(leftNode)) {
    // varName = leftNode.object.name; // doesn't work as 'name' can be nested

    return findLeftMostName(leftNode)!;
  }

  return;
}

export const GlobalVarsVisitor: ReferencedVisitor<{
  globalVariables: CapturedGlobals;
}> = {
  AssignmentExpression(path) {
    const leftNode = path.node.left;
    let varName = getLeftValName(leftNode);
    const {globalVariables} = this;

    if (!varName) {
      return;
    }
    console.log(varName);

    const isVariableLocal = isVariableDefinedWithin(
      path,
      varName,
      globalVariables.functionName, // parent function name
    );
    console.log(`Is ${varName} global:`, !isVariableLocal, '\n');

    // means it is a global variable
    if (!isVariableLocal) {
      globalVariables.write.push(varName);
    }
  },
  CallExpression(path) {
    if (isIdentifier(path.node.callee)) {
      const functionName = path.node.callee.name;

      this.globalVariables.functions.push(functionName);
    }
  },
  ReferencedIdentifier(path) {
    const identifier = path.node.name;
    const {globalVariables} = this;

    // check if identifier is a Top-level function
    // probably used like this `const abc = someTopLevelFunction`
    // or `doSomethingWithCallback(topLevelFunction)`
    if (globalVariables.topLevelFunctions.has(identifier)) {
      globalVariables.functions.push(identifier);
      return;
    }

    if (isReferencedInTheLeftExpression(path)) {
      return;
    }

    if (isPartOfPerformingACall(path)) {
      return;
    }

    const isItLocal = isVariableDefinedWithin(
      path,
      identifier,
      globalVariables.functionName, // parent function name
    );

    if (!isItLocal) {
      globalVariables.read.push(identifier); // global read
    }
  },
};
