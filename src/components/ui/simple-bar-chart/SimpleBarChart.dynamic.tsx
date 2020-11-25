import dynamic from 'next/dynamic';
import { SimpleBarChart } from './SimpleBarChart';

export const SimpleBarChartDynamic = dynamic(
  () => import('./SimpleBarChart').then((mod) => mod.SimpleBarChart as any),
  { ssr: false }
) as typeof SimpleBarChart;
