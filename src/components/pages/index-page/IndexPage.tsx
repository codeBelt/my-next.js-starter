import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Routes } from '../../../constants/Routes';
import { container } from 'tsyringe';
import { Bar } from './Bar';

interface IProps {
  testId?: string;
  store: Bar;
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
      <h2 data-testid={`${testId}_sub-header`}>{props.store.subHeader}</h2>
      <p>
        <Link href={Routes.About}>
          <a data-testid={`${testId}_about-button`}>About</a>
        </Link>
      </p>
    </div>
  );
};

IndexPage.displayName = 'IndexPage';
