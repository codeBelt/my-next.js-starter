import React from 'react';

interface IProps {}

export const AnyChartScript: React.FC<IProps> = (props) => {
  return <script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-base.min.js" type="text/javascript" />;
};
