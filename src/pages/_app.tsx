import '../css/main.css';

import React, { useCallback } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { usePageVisibility } from '../hooks/usePageVisibility';

const NextApp: React.FC<AppProps> = (props) => {
  const onVisibilityHandler = useCallback((isPageHidden) => {
    console.log(`Is tab hidden: ${isPageHidden}`);
  }, []);

  const isHidden = usePageVisibility(onVisibilityHandler);

  console.log(`isHidden (Causes Re-Renders)`, isHidden);

  // useEffect(() => {
  //   const visibilityChange = getVisibilityChangeEvent();
  //
  //   document.addEventListener(visibilityChange, onVisibilityHandler, false);
  //
  //   return () => document.removeEventListener(visibilityChange, onVisibilityHandler);
  // }, [onVisibilityHandler]);

  return (
    <React.Fragment>
      <Head>
        <title>My Next.js Starter</title>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      </Head>
      <props.Component {...props.pageProps} />
    </React.Fragment>
  );
};

export default NextApp;
