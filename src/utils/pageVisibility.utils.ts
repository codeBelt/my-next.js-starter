export const getVisibilityChangeEvent = (): string => {
  if (typeof document['msHidden'] !== 'undefined') {
    return 'msvisibilitychange';
  } else if (typeof document['webkitHidden'] !== 'undefined') {
    return 'webkitvisibilitychange';
  }

  // Opera 12.10 and Firefox 18 and later support
  return 'visibilitychange';
};

export const getDocumentHiddenProp = (): string => {
  if (typeof document['msHidden'] !== 'undefined') {
    return 'msHidden';
  } else if (typeof document['webkitHidden'] !== 'undefined') {
    return 'webkitHidden';
  }

  // Opera 12.10 and Firefox 18 and later support
  return 'hidden';
};

export const getIsDocumentHidden = (): boolean => {
  const hidden = getDocumentHiddenProp();

  // If a browser doesn't support the hidden prop.
  // We still want to return a boolean (false) if "document[hidden]" is undefined.
  return Boolean(document[hidden]);
};
