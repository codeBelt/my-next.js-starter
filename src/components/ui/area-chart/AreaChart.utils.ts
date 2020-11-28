export const generateAreaChart = (data: any[], title: string) => {
  const chart = anychart.area();

  data.forEach((chartData) => chart.area(chartData));
  chart.title(title);

  return {
    charts: [chart],
    stage: anychart.graphics.create(),
  };
};
