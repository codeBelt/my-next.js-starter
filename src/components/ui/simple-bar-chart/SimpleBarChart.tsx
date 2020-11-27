import React from 'react';
import { getChart } from './SimpleBarChart.utils';
import AnyChartReact from 'anychart-react';

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
    <AnyChartReact
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
