import Stack from '@mui/material/Stack';

import FilterChart from '../FilterChart';

const ChartHeader = ({ handleFilter }) => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <h1>DATA CHART</h1>
      <FilterChart handleFilter={handleFilter} />
    </Stack>
  );
};

export default ChartHeader;
