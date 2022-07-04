import {PluginItem} from '@babel/core';
import {
  Identifier,
  VariableDeclaration,
  FunctionDeclaration,
} from '@babel/types';

interface Edge {
  funcName: string;
  to: string[];
}
const edges: Edge[] = [];

const isDefined = <T>(v: T | null | undefined): v is T => !v;

export interface SharedObj {
  globalVars: string[];
  topLevelFunctions: string[];
}

export default (sharedObj: SharedObj) => (): PluginItem => {
  return {
    visitor: {
      Program(path) {
        sharedObj.globalVars = path.node.body
          .filter(
            (node): node is VariableDeclaration =>
              node.type === 'VariableDeclaration',
          )
          .map((node) => node.declarations[0].id)
          .filter((id): id is Identifier => id.type === 'Identifier')
          .map((id) => id.name);

        sharedObj.topLevelFunctions = path.node.body
          .filter(
            (node): node is FunctionDeclaration =>
              node.type === 'FunctionDeclaration',
          )
          .map((node) => (node.id ? node.id.name : null))
          .filter(isDefined);
      },
    },
  };
};
