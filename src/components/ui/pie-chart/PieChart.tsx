import React from 'react';
import AnyChartReact from 'anychart-react';

interface IProps {
  chartId: string;
  data: number[];
  height?: number | string;
  title: string;
  width?: number | string;
}

export const PieChart: React.FC<IProps> = (props) => {
  return (
    <AnyChartReact
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
