import React, { useState } from 'react';
import { MainLayout } from '../components/shared/main-layout/MainLayout';
import { IndexPage } from '../components/pages/index-page/IndexPage';
import { NextPage } from 'next';
import { container } from 'tsyringe';
import { Bar } from '../components/pages/index-page/Bar';

interface IProps {}

const IndexRoute: NextPage<IProps> = (props) => {
  const [store] = useState(() => container.resolve(Bar));

  return (
    <MainLayout title="Home | Next.js + TypeScript Example">
      <IndexPage store={store} />
    </MainLayout>
  );
};

// ts-prune-ignore-next
export default IndexRoute;
