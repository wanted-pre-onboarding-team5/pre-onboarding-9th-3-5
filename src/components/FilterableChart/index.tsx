import { Box } from '@mui/material';

import ChartFilter from './ChartFilter';
import MixedChart from './MixedChart';

import type { QueryData } from '@/types/queryData';
import type { FlexsysApi, Id } from '@/types/responseData';

import { useChartFilter } from '@/hooks/useChartFilter';

type ChartProps = {
  loaderData: FlexsysApi;
  queryData: QueryData;
};

const FilterableChart = ({ loaderData, queryData }: ChartProps) => {
  const currentFilter = queryData?.selectedId as Id;
  const { selectedFilter, handleFilterClick, handleChartClick } = useChartFilter(currentFilter);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ChartFilter currentFilter={selectedFilter} onClick={handleFilterClick} />
      </Box>
      <MixedChart loaderData={loaderData} onClick={handleChartClick} />
    </>
  );
};

export default FilterableChart;
