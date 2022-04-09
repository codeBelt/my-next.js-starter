/**
 * ts-prune-ignore-next
 */
export const isDefined = <T>(t: T | null | undefined): t is T => t != null;

/**
 * ts-prune-ignore-next
 */
export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

/**
 * ts-prune-ignore-next
 */
export const isRegex = (value: unknown): value is RegExp => {
  return value instanceof RegExp;
};

/**
 * ts-prune-ignore-next
 */
export const isDateObject = (value: unknown): value is Date => {
  return value instanceof Date;
};

/**
 * ts-prune-ignore-next
 */
export const isObject = (value: unknown): value is Record<string, any> => {
  return (
    Boolean(value) && !Array.isArray(value) && typeof value === 'object' && !isRegex(value) && !isDateObject(value)
  );
};

/**
 * Converts a string or number to a boolean.
 *
 * @example
 *      isTruthy("FALSE");
 *      // false
 *
 *      isTruthy("off");
 *      // false
 *
 *      isTruthy(0);
 *      // false
 *
 *      isTruthy(undefined);
 *      // false
 *
 * ts-prune-ignore-next
 */
export const isTruthy = (value: unknown): value is boolean => {
  const normalized = typeof value === 'string' ? value.toLowerCase() : value;

  return !(normalized == null || (normalized as number) <= 0 || normalized === 'false' || normalized === 'off');
};
