import React, { PropsWithChildren, ReactNode } from 'react';
import Head from 'next/head';
import { MainNavigation } from '../main-navigation/MainNavigation';

interface IProps {
  title?: string;
  children: ReactNode;
}

export const MainLayout: React.FC<IProps> = (props) => {
  const { title = 'This is the default title' } = props;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
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

MainLayout.displayName = 'MainLayout';
