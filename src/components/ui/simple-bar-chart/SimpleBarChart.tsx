import React, { useMemo } from 'react';
import { generateSimpleBarChart } from './SimpleBarChart.utils';
import AnyChart from 'anychart-react';

interface IProps {
  chartId: string;
  // data: number[];
  height?: number | string;
  title: string;
  width?: number | string;
}

export const SimpleBarChart: React.FC<IProps> = (props) => {
  const chartData = useMemo(() => generateSimpleBarChart(), []);

  return (
    <AnyChart
      charts={chartData.charts}
      credits={false}
      instance={chartData.stage}
      legend={true}
      title={props.title}
      height={props.height}
      width={props.width}
      id={props.chartId}
    />
  );
};
