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
    isObjectPerformingCall =
      isCallExpression(path.node) && path.node.callee === previousPath.node;
    previousPath = path;

    return isObjectPerformingCall;
  });

  return isObjectPerformingCall;
}
