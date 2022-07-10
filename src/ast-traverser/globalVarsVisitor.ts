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
  functionInformation: CapturedGlobals;
}> = {
  AssignmentExpression(path) {
    const leftNode = path.node.left;
    let varName = getLeftValName(leftNode);
    const {functionInformation} = this;

    if (!varName) {
      return;
    }
    console.log(varName);

    const isVariableLocal = isVariableDefinedWithin(
      path,
      varName,
      functionInformation.functionName, // parent function name
    );

    // means it is a global variable
    if (!isVariableLocal) {
      functionInformation.write.push(varName);
    }
  },
  CallExpression(path) {
    if (isIdentifier(path.node.callee)) {
      const functionName = path.node.callee.name;

      this.functionInformation.functions.push(functionName);
    }
  },
  ReferencedIdentifier(path) {
    const identifier = path.node.name;
    const {functionInformation} = this;

    // check if identifier is a Top-level function
    // probably used like this `const abc = someTopLevelFunction`
    // or `doSomethingWithCallback(topLevelFunction)`
    if (functionInformation.topLevelFunctions.has(identifier)) {
      functionInformation.functions.push(identifier);
      return;
    }

    if (isReferencedInTheLeftExpression(path)) {
      return;
    }

    if (isPartOfPerformingACall(path)) {
      return;
    }

    const isVarLocal = isVariableDefinedWithin(
      path,
      identifier,
      functionInformation.functionName, // parent function name
    );

    if (!isVarLocal) {
      functionInformation.read.push(identifier); // global read
    }
  },
};
