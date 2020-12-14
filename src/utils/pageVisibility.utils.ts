let hiddenProp: string;
const visibilityMap = {
  hidden: 'visibilitychange', // Opera 12.10 and Firefox 18 and later support
  mozHidden: 'mozvisibilitychange',
  msHidden: 'msvisibilitychange',
  webkitHidden: 'webkitvisibilitychange',
};

export const getDocumentHiddenProp = (): string => {
  if (hiddenProp) {
    return hiddenProp;
  }

  const supportedHiddenProp = Object.keys(visibilityMap).find((key) => typeof document[key] !== 'undefined');

  hiddenProp = supportedHiddenProp || 'hidden';

  return hiddenProp;
};

export const getVisibilityChangeEvent = (): string => {
  const hidden = getDocumentHiddenProp();

  return visibilityMap[hidden];
};

export const getIsDocumentHidden = (): boolean => {
  const hidden = getDocumentHiddenProp();

  // If the browser doesn't support the hidden prop.
  // We still want to return a boolean (false) if "document[hidden]" is undefined.
  return Boolean(document[hidden]);
};
