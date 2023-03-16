import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useContext } from 'react';

import { REGION_LIST } from '@/constants/chart';
import { filterContext } from '@/context/FilterProvider';

const FilterChart = ({ handleFilter }: { (region: string): void }) => {
  const selectedRegion = useContext(filterContext);
  const handleChange = (event) => {
    handleFilter(event.target.value);
  };
  return (
    <ButtonGroup>
      {REGION_LIST.map((region) => (
        <Button
          key={region}
          variant={selectedRegion === region ? 'contained' : 'outlined'}
          size='large'
          value={region}
          onClick={handleChange}
        >
          {region}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default FilterChart;
