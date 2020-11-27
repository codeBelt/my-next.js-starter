import React from 'react';
import { Layout } from '../components/shared/Layout';
import { NextPage } from 'next';
import { AboutPage } from '../components/pages/about-page/AboutPage';
import Head from 'next/head';
import { AnyChart } from '../modules/any-chart/AnyChart';

interface IProps {}

const AboutRoute: NextPage<IProps> = (props) => {
  return (
    <>
      <Head>
        <AnyChart />
      </Head>
      <Layout title="About">
        <AboutPage />
      </Layout>
    </>
  );
};

export default AboutRoute;
