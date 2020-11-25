import React from 'react';
import { getChart } from './SimpleBarChart.utils';
import AnyChart from 'anychart-react';

interface IProps {
  chartId: string;
  // data: number[];
  height?: number | string;
  title: string;
  width?: number | string;
}

export const SimpleBarChart: React.FC<IProps> = (props) => {
  const chart = getChart();

  return (
    <AnyChart
      charts={chart.data}
      credits={false}
      instance={chart.stage}
      legend={true}
      title={props.title}
      height={props.height}
      width={props.width}
      id={props.chartId}
    />
  );
};
