type Args<T> = T extends (...args: infer Args) => any ? Args : never;
type FirstArg<T> = Args<T> extends [infer First, ...any] ? First : never;
type RestArgs<T> = Args<T> extends [any, ...infer Rest] ? Rest : never;

export function mapify<F extends Function>(fn: F) {
  type FirstCbArgs = Args<FirstArg<F>>;

  return <T>(callback: (...args: FirstCbArgs) => T, ...rest: RestArgs<F>) => {
    const result: T[] = [];

    fn((...args: FirstCbArgs) => {
      result.push(callback(...args));
    }, ...rest);

    return result;
  };
}

export function inlineMapify<F extends Function, T>(
  fn: F,
  callback: (...args: Args<FirstArg<F>>) => T,
  ...rest: RestArgs<F>
) {
  type FirstCbArgs = Args<FirstArg<F>>;

  const result: T[] = [];

  fn((...args: FirstCbArgs) => {
    result.push(callback(...args));
  }, ...rest);

  return result;
}
