/**
 * A function that performs no operations.
 *
 * ts-prune-ignore-next
 */
export const noop = Function.prototype as <T>(...params: T[]) => T;

/**
 * ts-prune-ignore-next
 */
export const uniq = <T>(array: T[]): T[] => Array.from(new Set(array));

/**
 * ts-prune-ignore-next
 */
export const delay = (durationInMilliseconds = 250): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, durationInMilliseconds));
};
