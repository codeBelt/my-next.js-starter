// A function that performs no operations.
export const noop = Function.prototype as <T>(...params: T[]) => T;

export const uniq = <T>(array: T[]): T[] => Array.from(new Set(array));

export const delay = (durationInMilliseconds = 250): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, durationInMilliseconds));
};
