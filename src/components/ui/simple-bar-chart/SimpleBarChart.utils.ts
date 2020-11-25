export const getChart = () => {
  const stage = anychart.graphics.create();

  const chart1 = anychart.line([1, 2, 3]);

  chart1.bounds(0, 0, '100%', '50%');

  const chart2 = anychart.column();

  chart2.column([3, 2, 1]);
  chart2.line([3, 5, 6]);
  chart2.bounds(0, '50%', '100%', '50%');

  return { stage, data: [chart1, chart2] };
};
