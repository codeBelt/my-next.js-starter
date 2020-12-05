import React from 'react';
import { MainLayout } from '../components/shared/main-layout/MainLayout';
import { IndexPage } from '../components/pages/index-page/IndexPage';
import { NextPage } from 'next';

interface IProps {}

const IndexRoute: NextPage<IProps> = (props) => {
  return (
    <MainLayout title="Home | Next.js + TypeScript Example">
      <IndexPage />
    </MainLayout>
  );
};

export default IndexRoute;
