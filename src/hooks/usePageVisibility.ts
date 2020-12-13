import { useCallback, useEffect, useState } from 'react';
import { getIsDocumentHidden, getVisibilityChangeEvent } from '../utils/pageVisibility.utils';

/**
 * React Hook that works with the Page Visibility API that to determine when a document becomes visible or hidden.
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
   * allowReturnStateToBeUpdated
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
