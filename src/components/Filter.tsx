import Button from '@mui/material/Button';

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

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { name } = e.target as HTMLInputElement;
    filteredDistrict && setFilteredDistrict(filterDistrict(districtValues, name));
  };

  return (
    <>
      {[...districtSet].map((district: React.Element, i) => (
        <Button key={i} variant='contained' size='small' name={district} onClick={onClickHandler}>
          {district}
        </Button>
      ))}
    </>
  );
};

export default Filter;
