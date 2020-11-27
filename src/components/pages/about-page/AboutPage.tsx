import React from 'react';
import Link from 'next/link';
import { Routes } from '../../../constants/Routes';
import { PieChartDynamic } from '../../ui/pie-chart/PieChart.dynamic';

interface IProps {}

export const AboutPage: React.FC<IProps> = (props) => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href={Routes.Index}>
          <a>Go home</a>
        </Link>
      </p>
      <PieChartDynamic width="100%" height={200} data={[5, 3, 3, 5]} title="Pie Chart" chartId="pieId" />
    </div>
  );
};
