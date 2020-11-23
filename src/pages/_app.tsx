import '../css/main.css';

import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const NextApp: React.FC<AppProps> = (props) => {
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
