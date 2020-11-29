import React, { useMemo } from 'react';
import AnyChart from 'anychart-react';
import { generateAreaChart } from './AreaChart.utils';

interface IProps {}

interface IProps {
  chartId: string;
  data: any[];
  height?: number | string;
  title: string;
  width?: number | string;
}

export const AreaChart: React.FC<IProps> = (props) => {
  const chartData = useMemo(() => generateAreaChart(props.data, props.title), [props.data, props.title]);

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

AreaChart.defaultProps = {};
