import React from 'react';
import Head from 'next/head';
import { MainNavigation } from '../main-navigation/MainNavigation';

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
      <header>
        <MainNavigation />
      </header>
      {props.children}
      <footer>
        <hr />
        <span>I&#39;m here to stay (Footer)</span>
      </footer>
    </div>
  );
};

MainLayout.defaultProps = {
  title: 'This is the default title',
};
