import 'chart.js/auto';

import { useChartData } from '@/hooks';

import MultiChart from '@/components/MultiChart';

export const Root = () => {
  const data = useChartData();
  return data && <MultiChart data={data} />;
};
