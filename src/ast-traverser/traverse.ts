import * as babel from '@babel/standalone';
import plugin, {SharedObj} from './plugin';

export function traverse(inputCode: string) {
  const sharedObj: SharedObj = {
    globalVars: [],
    topLevelFunctions: [],
  };

  babel.transform(inputCode, {
    plugins: [plugin(sharedObj)],
    code: true,
    ast: false,
  });

  const graph = document.querySelector<HTMLDivElement>('.graph')!;
  graph.innerHTML = sharedObj.globalVars.join('<br/>');
}
