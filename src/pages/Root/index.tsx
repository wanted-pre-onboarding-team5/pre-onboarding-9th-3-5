import 'chart.js/auto';

import { useChartData } from '@/hooks';

import FilterChart from '@/components/FilterChart';
import TimeSeriesChart from '@/components/TimeSeriesChart';

export const Root = () => {
  const [chartData, chartOptions, handleFilter] = useChartData();

  return (
    chartData &&
    chartOptions && (
      <>
        <FilterChart handleFilter={handleFilter} />
        <TimeSeriesChart chartData={chartData} chartOptions={chartOptions} />
      </>
    )
  );
};
