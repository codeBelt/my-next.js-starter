import React from 'react';
import AnyChart from 'anychart-react';

interface IProps {
  chartId: string;
  data: number[];
  height?: number | string;
  title: string;
  width?: number | string;
}

export const PieChart: React.FC<IProps> = (props) => {
  return (
    <AnyChart
      type="pie"
      data={props.data}
      title={props.title}
      height={props.height}
      width={props.width}
      id={props.chartId}
      credits={false}
    />
  );
};

PieChart.defaultProps = {};
