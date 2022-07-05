import {NodePath} from '@babel/core';

import {isAssignmentExpression} from '../utils/typeGuards';

/**
 * Checks if the referenced identifier is used in the left side of
 * the equality expression. This would mean it is only read from.
 * ---
 * To avoid things like `someObj.cost = 10` as this modifies
 * the `someObject`. We only want reads here:
 *
 * @example
 * var tmp = weWantToKnowIfReferencedHere.cost;
 *
 * var orReferencedHere = somthing;
 */
export function isReferencedInTheLeftExpression(path: NodePath) {
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
