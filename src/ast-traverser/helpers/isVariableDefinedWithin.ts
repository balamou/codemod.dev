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
