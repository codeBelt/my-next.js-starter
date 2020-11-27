import React from 'react';
import Link from 'next/link';
import { Routes } from '../../../constants/Routes';
import { SimpleBarChartDynamic } from '../../ui/simple-bar-chart/SimpleBarChart.dynamic';

interface IProps {}

export const IndexPage: React.FC<IProps> = (props) => {
  return (
    <div>
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
