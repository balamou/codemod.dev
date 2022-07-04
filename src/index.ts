import {calculate} from './ calculate';

window.addEventListener('load', () => {
  document.write('Hello World!xxxxx');

  const [x1, x2] = calculate(5, 10, 1);

  document.write(`x1: ${x1} x2: ${x2}`);
});
