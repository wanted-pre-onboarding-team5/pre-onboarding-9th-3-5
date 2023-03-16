import { Stack } from '@mui/system';

import FilterByID from './filter-by-id';

import type { QueryDataType } from '@/types/query-data';

type FilterBoxProps = {
  queryData: QueryDataType | undefined;
};

const FilterBox = ({ queryData }: FilterBoxProps) => {
  return (
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      <h3>FlexSysChart</h3>
      <FilterByID selectedID={queryData?.selectedID} />
    </Stack>
  );
};

export default FilterBox;
