import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChartClick } from '@/types/chart';

export const useChartFilter = (currentFilter: string) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(currentFilter || 'ALL');
  const navigate = useNavigate();

  const handleFilterClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.currentTarget.value;
    setSelectedFilter(filterValue);
    if (filterValue === 'ALL') {
      navigate(`/`);
      return;
    }

    navigate(`?selectedId=${filterValue}`);
  };

  const handleChartClick: ChartClick = (_, elements, idArray) => {
    const element = elements[0];
    if (!element) {
      navigate(`/`);
      setSelectedFilter('ALL');
      return;
    }
    const selectedId = idArray[element.index];
    navigate(`?selectedId=${selectedId}`);
  };

  return {
    selectedFilter,
    handleFilterClick,
    handleChartClick,
  };
};
