import dynamic from 'next/dynamic';
import { AreaChart } from './AreaChart';

export const AreaChartDynamic = dynamic(
  () => import('./AreaChart' /* webpackChunkName: "AreaChart" */).then((mod) => mod.AreaChart as any),
  { ssr: false }
) as typeof AreaChart;
