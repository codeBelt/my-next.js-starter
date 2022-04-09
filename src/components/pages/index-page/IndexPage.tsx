import React from 'react';
import Link from 'next/link';
import { Routes } from '../../../constants/Routes';

interface IProps {
  testId?: string;
}

export const IndexPage: React.FC<IProps> = (props) => {
  const { testId = IndexPage.displayName } = props;

  return (
    <div>
      <h1>
        Hello Next.js{' '}
        <span
          role="img"
          aria-label="hand waving"
        >
          👋
        </span>
      </h1>
      <p>
        <Link href={Routes.About}>
          <a data-testid={`${testId}_about-button`}>About</a>
        </Link>
      </p>
    </div>
  );
};

IndexPage.displayName = 'IndexPage';
