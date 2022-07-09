import {NodePath} from '@babel/core';

import {isCallExpression} from '../utils/typeGuards';

/**
 * Check if the path is part of a calling expression, such as
 * `someFn()`, or `someObj.run()`
 *
 * We don't want `hello()` or `someObj.hello(param)`
 * since those are not technically reads
 */
export function isPartOfPerformingACall(path: NodePath) {
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
