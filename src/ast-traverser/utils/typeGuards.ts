import {
  AssignmentExpression,
  Identifier,
  CallExpression,
  FunctionDeclaration,
  Node,
  MemberExpression,
} from '@babel/types';

export function isAssignmentExpression(
  node: Node,
): node is AssignmentExpression {
  if (node.type === 'AssignmentExpression') {
    return true;
  }

  return false;
}

export function isCallExpression(node: Node): node is CallExpression {
  if (node.type === 'CallExpression') {
    return true;
  }

  return false;
}

export function isFunctionDeclaration(node: Node): node is FunctionDeclaration {
  if (node.type === 'FunctionDeclaration') {
    return true;
  }

  return false;
}

export function isIdentifier(node: Node): node is Identifier {
  if (node.type === 'Identifier') {
    return true;
  }

  return false;
}

export function isMemberExpression(node: Node): node is MemberExpression {
  if (node.type === 'MemberExpression') {
    return true;
  }

  return false;
}
