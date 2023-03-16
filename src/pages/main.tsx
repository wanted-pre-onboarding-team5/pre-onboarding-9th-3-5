import { FilterGroup } from '@/components/FilterGroup';
import { MixedChart } from '@/components/MixedChart';
import { useChart } from '@/hooks/useChart';

export const Main = () => {
  const { data, options, chartRef, handleButtonClick, handleChartClick } = useChart();

  return (
    <>
      <FilterGroup onClick={handleButtonClick} />
      <MixedChart data={data} options={options} onClick={handleChartClick} chartRef={chartRef} />
    </>
  );
};
