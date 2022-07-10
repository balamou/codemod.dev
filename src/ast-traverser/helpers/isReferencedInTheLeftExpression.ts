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
 * var weWantToKnowIfReferencedHere.abc = something;
 *
 * var tmp = notHere.cost;
 */
export function isReferencedInTheLeftExpression(path: NodePath) {
  let previousPath = path;
  let isObjectReferencedInTheLeft = false;

  path.findParent((path) => {
    isObjectReferencedInTheLeft =
      isAssignmentExpression(path.node) && path.node.left === previousPath.node;
    previousPath = path;

    return isObjectReferencedInTheLeft; // stop if object is referenced in the left
  });

  return isObjectReferencedInTheLeft;
}
