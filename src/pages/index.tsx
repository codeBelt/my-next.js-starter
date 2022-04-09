import React from 'react';
import { MainLayout } from '../components/shared/main-layout/MainLayout';
import { IndexPage } from '../components/pages/index-page/IndexPage';
import { NextPage } from 'next';
import Head from 'next/head';
import { AnyChartScript } from '../modules/any-chart/AnyChartScript';

interface IProps {}

const IndexRoute: NextPage<IProps> = (props) => {
  return (
    <>
      <Head>
        <AnyChartScript />
      </Head>
      <MainLayout title="Home | Next.js + TypeScript Example">
        <IndexPage />
      </MainLayout>
    </>
  );
};

// ts-prune-ignore-next
export default IndexRoute;
