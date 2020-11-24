import React from 'react';
import Link from 'next/link';
import { Routes } from '../../../constants/Routes';

interface IProps {}

export const AboutPage: React.FC<IProps> = (props) => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href={Routes.Index}>
          <a>Go home</a>
        </Link>
      </p>
    </div>
  );
};
