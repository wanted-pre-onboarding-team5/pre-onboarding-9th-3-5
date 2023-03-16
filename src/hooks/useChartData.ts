import { ChartData, ChartOptions } from 'chart.js';
import { useEffect, useState, useContext } from 'react';

import { API_PATH } from '@/constants';
import { httpClient, createChartData } from '@/utils';

import { dispatchContext } from '@/context/FilterProvider';
import { filterContext } from '@/context/FilterProvider';

export const useChartData = () => {
  const [data, setData] = useState<ChartData>();
  const [options, setOptions] = useState<ChartOptions>();

  const dispatch = useContext(dispatchContext);
  const selectedRegion = useContext(filterContext);

  const handleFilter = (region: string): void => {
    dispatch({ type: 'SET', payload: region });
  };

  const updateData = async () => {
    const { response } = await httpClient(API_PATH.data);
    const chartData = createChartData(response, selectedRegion, handleFilter);
    setData(() => chartData.data);
    setOptions(() => chartData.options);
  };

  useEffect(() => {
    updateData();
  }, [selectedRegion]);

  return [data, options, handleFilter];
};
