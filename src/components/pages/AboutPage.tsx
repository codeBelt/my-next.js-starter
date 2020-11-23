import React from 'react';
import Link from 'next/link';

interface IProps {}

export const AboutPage: React.FC<IProps> = (props) => (
  <div>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </div>
);
