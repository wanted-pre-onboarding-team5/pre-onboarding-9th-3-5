import FilterByID from './FilterByID';
import MixedChart from './MixedChart';

import type { MockData, IDType } from '@/types/mockData';
import type { QueryDataType } from '@/types/queryData';

type ChartProps = {
  loaderData: MockData;
  queryData: QueryDataType;
};

const FilterableChart = ({ loaderData, queryData }: ChartProps) => {
  return (
    <>
      <FilterByID selectedID={queryData?.selectedID as IDType} />
      <MixedChart loaderData={loaderData} queryData={queryData} />
    </>
  );
};

export default FilterableChart;
