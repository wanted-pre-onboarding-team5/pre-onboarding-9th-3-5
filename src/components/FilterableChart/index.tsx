import { Box } from '@mui/material';

import ChartFilter from './ChartFilter';
import MixedChart from './MixedChart';

import type { QueryData } from '@/types/queryData';
import type { FlexsysApi, Id } from '@/types/responseData';

type ChartProps = {
  loaderData: FlexsysApi;
  queryData: QueryData;
};

const FilterableChart = ({ loaderData, queryData }: ChartProps) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ChartFilter currentFilter={queryData?.selectedId as Id} />
      </Box>
      <MixedChart loaderData={loaderData} />
    </>
  );
};

export default FilterableChart;
