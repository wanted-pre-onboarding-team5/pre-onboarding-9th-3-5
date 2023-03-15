import 'chart.js/auto';

import { useChartData } from '@/hooks';

import TimeSeriesChart from '@/components/TimeSeriesChart';

export const Root = () => {
  const [data, options] = useChartData();
  return data && <TimeSeriesChart data={data} options={options} />;
};
