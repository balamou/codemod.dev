import {isAssignmentExpression} from '../utils/typeGuards';
import {NodePath} from '@babel/core';

/**
 * To avoid things like `someObj.cost = 10` as this modifies
 * the `someObject`. We only want reads here:
 *
 * @example
 * var tmp = weWantThisObject.cost;
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
