import dynamic from 'next/dynamic';
import { PieChart } from './PieChart';

export const PieChartDynamic = dynamic(
  () => import('./PieChart' /* webpackChunkName: "PieChart" */).then((mod) => mod.PieChart as any),
  { ssr: false }
) as typeof PieChart;
