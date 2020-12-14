import { useCallback, useEffect, useState } from 'react';
import { getIsDocumentHidden, getVisibilityChangeEvent } from '../utils/pageVisibility.utils';

/**
 * React Hook that works with the Page Visibility API to determine when a document becomes visible or hidden.
 * https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
 *
 * @param callback
 * @param callbackOnly
 *
 * @example
 *    const isPageHidden = usePageVisibility();
 *
 *    console.log(`isPageHidden (Causes Re-Renders)`, isPageHidden);
 */
export const usePageVisibility = (
  /**
   * Callback function called when the visibility of the document changes.
   *
   * @example
   *    const onVisibilityHandler = useCallback((isPageHidden) => {
   *      console.log(`Is tab hidden: ${isPageHidden}`);
   *    }, []);
   *
   *    const isHidden = usePageVisibility(onVisibilityHandler);
   *
   *    console.log(`isHidden (Causes Re-Renders)`, isHidden);
   */
  callback?: (isHidden: boolean) => void,
  /**
   * If you are passing in a "callback" and don't need to use the returned value then you can pass in "true"
   * to let the usePageVisibility hook to not to return the visibility state which will prevent the component
   * from re-rendering.
   *
   * @example
   *    const onVisibilityHandler = useCallback((isPageHidden) => {
   *      console.log(`Is tab hidden: ${isPageHidden}`);
   *    }, []);
   *
   *    usePageVisibility(onVisibilityHandler, true);
   */
  callbackOnly = false
): boolean | undefined => {
  const [isHidden, setIsHidden] = useState(false);

  const onVisibilityHandler = useCallback(() => {
    const isPageHidden = getIsDocumentHidden();

    if (callback) {
      callback(isPageHidden);
    }

    if (!callbackOnly) {
      setIsHidden(isPageHidden);
    }
  }, [callback, callbackOnly]);

  useEffect(() => {
    const visibilityChange = getVisibilityChangeEvent();

    document.addEventListener(visibilityChange, onVisibilityHandler, false);

    return () => document.removeEventListener(visibilityChange, onVisibilityHandler);
  }, [onVisibilityHandler]);

  return callbackOnly ? undefined : isHidden;
};
