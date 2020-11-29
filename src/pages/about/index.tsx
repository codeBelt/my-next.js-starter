import React from 'react';
import { Layout } from '../../components/shared/Layout';
import { NextPage } from 'next';
import { AboutPage } from '../../components/pages/about-page/AboutPage';
import Head from 'next/head';
import { AnyChartScript } from '../modules/any-chart/AnyChartScript';

interface IProps {}

const AboutRoute: NextPage<IProps> = (props) => {
  return (
    <>
      <Head>
        <AnyChartScript />
      </Head>
      <Layout title="About">
        <AboutPage />
      </Layout>
    </>
  );
};

export default AboutRoute;
