import React from 'react';
import { Layout } from '../components/shared/Layout';
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
      <Layout title="Home | Next.js + TypeScript Example">
        <IndexPage />
      </Layout>
    </>
  );
};

export default IndexRoute;
