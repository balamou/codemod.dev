interface Node {
  type: 'function' | 'variable';
  value: string;
}

export function decodeNode(value: string) {
  return JSON.parse(value) as Node;
}

export function encodeNode(node: Node) {
  return JSON.stringify(node);
}
