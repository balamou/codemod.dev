import {NodePath, Visitor} from '@babel/core';
import {Identifier} from '@babel/types';
import {findLeftMostName} from './helpers/findLeftMostName';
import {isPartOfPerformingACall} from './helpers/isPartOfPerformingACall';
import {isReferencedInTheLeftExpression} from './helpers/isReferencedInTheLeftExpression';
import {isVariableDefinedWithin} from './helpers/isVariableDefinedWithin';
import {CapturedGlobals} from './plugin';
import {isIdentifier, isMemberExpression} from './utils/typeGuards';

type ReferencedVisitor<T> = Visitor<T> & {
  ReferencedIdentifier: (this: T, path: NodePath<Identifier>) => void;
};

export const GlobalVarsVisitor: ReferencedVisitor<{
  globalVariables: CapturedGlobals;
}> = {
  AssignmentExpression(path) {
    const leftNode = path.node.left;
    let varName = '';

    if (isIdentifier(leftNode)) {
      varName = leftNode.name;
    } else if (isMemberExpression(leftNode)) {
      // varName = leftNode.object.name; // doesn't work as 'name' can be nested

      varName = findLeftMostName(leftNode)!;
    } else {
      return; // EXIT
    }

    console.log(varName);

    const isVariableLocal = isVariableDefinedWithin(
      path,
      varName,
      this.globalVariables.functionName, // parent function name
    );
    console.log(`Is ${varName} global:`, !isVariableLocal, '\n');

    // means it is a global variable
    if (!isVariableLocal) {
      this.globalVariables.write.push(varName);
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
    console.log('~~~~~REF IDENT', identifier);

    // check if identifier is a Top-level function
    // probably used like this `const abc = someTopLevelFunction`
    // or `doSomethingWithCallback(topLevelFunction)`
    if (this.globalVariables.topLevelFunctions.has(identifier)) {
      this.globalVariables.functions.push(identifier);
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
      this.globalVariables.functionName, // parent function name
    );

    if (!isItLocal) {
      this.globalVariables.read.push(identifier); // global read
    }
  },
};
