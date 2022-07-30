import {
  AssignmentExpression,
  CallExpression,
  FunctionDeclaration,
  Identifier,
  MemberExpression,
  Node,
  VariableDeclaration,
} from '@babel/types';

export function isAssignmentExpression(
  node: Node,
): node is AssignmentExpression {
  return node.type === 'AssignmentExpression';
}

export function isCallExpression(node: Node): node is CallExpression {
  return node.type === 'CallExpression';
}

export function isFunctionDeclaration(node: Node): node is FunctionDeclaration {
  return node.type === 'FunctionDeclaration';
}

export function isIdentifier(node: Node): node is Identifier {
  return node.type === 'Identifier';
}

export function isMemberExpression(node: Node): node is MemberExpression {
  return node.type === 'MemberExpression';
}

export function isVariableDeclaration(node: Node): node is VariableDeclaration {
  return node.type === 'VariableDeclaration';
}
