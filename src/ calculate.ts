export function calculate(a: number, b: number, c: number) {
  const d = Math.pow(b, 2) - 4 * a * c;

  const x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
  const x2 = (-1 * b - Math.sqrt(d)) / (2 * a);

  return [x1, x2];
}
