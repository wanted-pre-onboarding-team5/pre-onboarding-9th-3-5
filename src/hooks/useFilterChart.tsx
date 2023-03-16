import { useState } from 'react';

import { changeParams, getCurrentFilter } from '@/utils';

import type { ChartEvent, ActiveElement } from 'chart.js';

import { ResponseData } from '@/types/ResponseDataType';

export type ChartClick = (e: ChartEvent, elements: ActiveElement[]) => void;

export const useFilterChart = (labels: string[], responseData: ResponseData) => {
  const [currentFilter, setCurrentFilter] = useState<string>(getCurrentFilter());

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterName = e.target.value;

    if (filterName === 'ALL') {
      window.history.pushState(null, '', window.location.origin);
      setCurrentFilter(filterName);
      return;
    }

    changeParams('id', filterName);
    setCurrentFilter(filterName);
  };

  const handleChartClick: ChartClick = (e, elements) => {
    const element = elements[0];
    if (!element) return;
    const { index: dataIndex } = element;
    const responseDataKey = labels[dataIndex];
    const placeKey = responseData[responseDataKey].id;
    changeParams('id', placeKey);
    setCurrentFilter(placeKey);
  };

  return { currentFilter, handleFilterChange, handleChartClick };
};
