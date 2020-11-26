import React from 'react';
import Link from 'next/link';
import { Routes } from '../../../constants/Routes';
import { SimpleBarChartDynamic } from '../../ui/simple-bar-chart/SimpleBarChart.dynamic';
import Head from 'next/head';

interface IProps {}

export const IndexPage: React.FC<IProps> = (props) => {
  return (
    <div>
      <Head>
        <script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-base.min.js" type="text/javascript" />
      </Head>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href={Routes.About}>
          <a>About</a>
        </Link>
      </p>
      <SimpleBarChartDynamic width="100%" height={200} title="Bar Chart" chartId="barId" />
    </div>
  );
};
