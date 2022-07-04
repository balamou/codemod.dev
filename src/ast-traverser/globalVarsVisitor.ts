import {NodePath, Visitor} from '@babel/core';
import {
  AssignmentExpression,
  Identifier,
  CallExpression,
  FunctionDeclaration,
  Node,
} from '@babel/types';
import {CapturedGlobals} from './plugin';

type ReferencedVisitor<T> = Visitor<T> & {
  ReferencedIdentifier: (this: T, path: NodePath<Identifier>) => void;
};

function findName(someObject: any): string | null {
  if (someObject.hasOwnProperty('name')) {
    return someObject.name;
  }

  if (someObject.hasOwnProperty('object')) {
    return findName(someObject.object);
  }

  if (someObject.hasOwnProperty('callee')) {
    // handles finding `document` in this instance:
    // document.getElementById("load").style.display = "block";
    return findName(someObject.callee);
  }

  return null;
}

function isAssignmentExpression(node: Node): node is AssignmentExpression {
  if (node.type === 'AssignmentExpression') {
    return true;
  }

  return false;
}

function isCallExpression(node: Node): node is CallExpression {
  if (node.type === 'CallExpression') {
    return true;
  }

  return false;
}

function isFunctionDeclaration(node: Node): node is FunctionDeclaration {
  if (node.type === 'FunctionDeclaration') {
    return true;
  }

  return false;
}

function isIdentifier(node: Node): node is Identifier {
  if (node.type === 'Identifier') {
    return true;
  }

  return false;
}

export const GlobalVarsVisitor: ReferencedVisitor<{
  globalVariables: CapturedGlobals;
}> = {
  AssignmentExpression(path) {
    const leftNode = path.node.left;
    let varName = '';

    if (leftNode.type === 'Identifier') {
      varName = leftNode.name;
    } else if (leftNode.type === 'MemberExpression') {
      // varName = leftNode.object.name; // doesn't work as 'name' can be nested

      varName = findName(leftNode)!;
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

// Check if variable is defined within its own or higher scopes
// up until it reaches the parentFunction declaration
function isVariableDefinedWithin(
  path: NodePath,
  varName: string,
  parentFunctionName: string,
) {
  let isDefinedWithinFunction = false;

  path.findParent((path) => {
    // @ts-ignore
    const isBound = path.scope.hasOwnBinding(varName, true);
    console.log(`-- (${varName}) --`, isBound);

    if (isBound) {
      isDefinedWithinFunction = true;
      return true; // stop going up
    }

    // reached the function declaration: STOP HERE
    if (
      isFunctionDeclaration(path.node) &&
      path.node.id?.name === parentFunctionName // current function name
    ) {
      const currentFunctionName = path.node.id.name;

      console.log('⬤ ', currentFunctionName);

      isDefinedWithinFunction = isBound;
      return true; // stop going up
    }
    return false; // continue going up
  });

  return isDefinedWithinFunction;
}

// To avoid things like `someObj.cost = 10` as this modifies
// the `someObject`. We want only reads here
// Ex: `var tmp = weWantThisObject.cost;`
function isReferencedInTheLeftExpression(path: NodePath) {
  let previousPath = path;
  let isObjectReferencedInTheLeft = false;

  path.findParent((path) => {
    if (isAssignmentExpression(path.node)) {
      if (path.node.left === previousPath.node) {
        isObjectReferencedInTheLeft = true;
        return true; // stop
      }
    }
    previousPath = path;

    return false; // continue
  });

  return isObjectReferencedInTheLeft;
}

// We don't want `hello()` or `someObj.hello(param)`
// since those are not technically reads
function isPartOfPerformingACall(path: NodePath) {
  let isObjectPerformingCall = false;
  let previousPath = path;

  path.findParent((path) => {
    if (isCallExpression(path.node)) {
      if (path.node.callee === previousPath.node) {
        isObjectPerformingCall = true;
        return true; // stop
      }
    }
    previousPath = path;

    return false; // continue
  });

  return isObjectPerformingCall;
}
