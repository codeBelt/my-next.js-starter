import React from 'react';
import Link from 'next/link';
import { Routes } from '../../../constants/Routes';
import { PieChartDynamic } from '../../ui/pie-chart/PieChart.dynamic';
import { AreaChartDynamic } from '../../ui/area-chart/AreaChart.dynamic';

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
      <PieChartDynamic
        width="100%"
        height={200}
        data={[
          ['Chocolate', 5],
          ['Rhubarb compote', 2],
          ['Crêpe Suzette', 2],
          ['American blueberry', 2],
          ['Buttermilk', 1],
        ]}
        title="Top 5 pancake fillings"
        chartId="pieId"
      />
      <AreaChartDynamic
        width={400}
        height={600}
        title="Set Z-Index of the orange area series"
        data={[
          [
            { x: 'Cycling', value: 4 },
            { x: 'Swimming', value: 20 },
            { x: 'Run', value: 8 },
            { x: 'Hiking', value: 17 },
          ],
          [
            { x: 'Cycling', value: 6 },
            { x: 'Swimming', value: 3 },
            { x: 'Run', value: 15 },
            { x: 'Hiking', value: 9 },
          ],
          [
            { x: 'Cycling', value: 2 },
            { x: 'Swimming', value: 10 },
            { x: 'Run', value: 2 },
            { x: 'Hiking', value: 2 },
          ],
        ]}
        chartId="areaId"
      />
    </div>
  );
};
