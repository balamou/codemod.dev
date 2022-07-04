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

  console.log(sharedObj.globalVars);

  const graph = document.querySelector('.graph');

  if (!graph) {
    return;
  }

  graph.innerHTML = sharedObj.globalVars.join('<br/>');
}
