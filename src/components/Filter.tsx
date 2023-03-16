import { Box, Button } from '@mui/material';

import { filterDistrict } from '@/utils/getChart';

type FilterProps = {
  districtValues?: string[];
  setFilteredDistrict?: void;
};

export const Filter = ({ districtValues, filteredDistrict, setFilteredDistrict }: FilterProps) => {
  const districtSet = new Set();
  for (const districtValue of districtValues) {
    districtSet.add(districtValue);
  }

  const onButtonFilteringHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { name } = e.target as HTMLInputElement;
    filteredDistrict && setFilteredDistrict(filterDistrict(districtValues, name));
  };

  return (
    <>
      <Box display='flex' justifyContent='center'>
        {[...districtSet].map((district: React.Element, i) => (
          <Button
            m='5'
            key={i}
            variant='contained'
            size='small'
            name={district}
            onClick={onButtonFilteringHandler}
          >
            {district}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default Filter;
