import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext } from 'react';

import { filterContext } from '@/context/FilterProvider';

const FilterChart = ({ handleFilter }: { (region: string): void }) => {
  const selectedRegion = useContext(filterContext);
  const handleChange = (event: SelectChangeEvent) => {
    handleFilter(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120, width: 300, marginBottom: 2 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Region</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={selectedRegion}
          label='Region'
          onChange={handleChange}
        >
          {['전체', '중랑구', '노원구', '성북구', '강남구'].map((region) => (
            <MenuItem key={region} value={region}>
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterChart;
