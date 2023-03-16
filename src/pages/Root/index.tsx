import 'chart.js/auto';

import { useChartData } from '@/hooks';

import ChartHeader from '@/components/ChartHeader';
import TimeSeriesChart from '@/components/TimeSeriesChart';

export const Root = () => {
  const [chartData, chartOptions, handleFilter] = useChartData();

  return (
    chartData &&
    chartOptions && (
      <>
        <ChartHeader handleFilter={handleFilter} />
        <TimeSeriesChart chartData={chartData} chartOptions={chartOptions} />
      </>
    )
  );
};
