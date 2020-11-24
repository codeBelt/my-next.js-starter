import React from 'react';
import Head from 'next/head';
import { MainNav } from './main-nav/MainNav';

interface IProps {
  title?: string;
}

export const Layout: React.FC<IProps> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <MainNav />
      </header>
      {props.children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

Layout.defaultProps = {
  title: 'This is the default title',
};
