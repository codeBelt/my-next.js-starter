import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class NextDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// ts-prune-ignore-next
export default NextDocument;
