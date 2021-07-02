import React from 'react';
import Head from 'next/head';

interface IProps {
  title?: string;
}

export const MainLayout: React.FC<IProps> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.children}
    </div>
  );
};

MainLayout.defaultProps = {
  title: 'This is the default title',
};
