import React from 'react';
import { MainLayout } from '../../components/shared/main-layout/MainLayout';
import { NextPage } from 'next';
import { AboutPage } from '../../components/pages/about-page/AboutPage';
import Head from 'next/head';
import { AnyChartScript } from '../../modules/any-chart/AnyChartScript';

interface IProps {}

const AboutRoute: NextPage<IProps> = (props) => {
  return (
    <>
      <Head>
        <AnyChartScript />
      </Head>
      <MainLayout title="About">
        <AboutPage />
      </MainLayout>
    </>
  );
};

export default AboutRoute;
