import FilterByID from './FilterByID';
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
      <FilterByID selectedId={queryData?.selectedId as Id} />
      <MixedChart loaderData={loaderData} queryData={queryData} />
    </>
  );
};

export default FilterableChart;
