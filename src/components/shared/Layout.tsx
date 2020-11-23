import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

interface IProps {
  title?: string;
}

export const Layout: React.FC<IProps> = (props) => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/users">
          <a>Users List</a>
        </Link>
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {props.children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

Layout.defaultProps = {
  title: 'This is the default title',
};
