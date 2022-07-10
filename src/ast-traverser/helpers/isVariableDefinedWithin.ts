import {NodePath} from '@babel/core';

import {isFunctionDeclaration} from '../utils/typeGuards';

/**
 * Check if variable is defined within its own or higher scopes
 * up until it reaches the `parentFunction` declaration
 */
export function isVariableDefinedWithin(
  path: NodePath,
  varName: string,
  parentFunctionName: string,
) {
  let isDefinedWithinFunction = false;

  path.findParent((path) => {
    // @ts-ignore
    isDefinedWithinFunction = path.scope.hasOwnBinding(varName, true);

    const didReachedFunctionDelcaration =
      isFunctionDeclaration(path.node) &&
      path.node.id?.name === parentFunctionName; // current function name

    // stop as soon as variabled is bound in the scope
    // or we reached the function declaration
    return isDefinedWithinFunction || didReachedFunctionDelcaration;
  });

  return isDefinedWithinFunction;
}
