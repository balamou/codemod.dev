type Args<T> = T extends (...args: infer A) => void ? A : never;
type FirstArg<T> = Args<T> extends [infer A, ...any] ? A : never;
type RestArgs<T> = Args<T> extends [any, ...infer A] ? A : never;

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
