import { useEffect, useState } from 'react';

import { ChartData } from '@/types';

import { getFilteredData, getOptions } from '../utils/chart';

export const useChart = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { response } = await fetch('/data.json').then((res) => res.json());
      setResponse(response);
    };

    fetchData();
  }, []);

  const chartLabels = Object.keys(response || {});
  const chartDatas: ChartData[] = Object.values(response || {});

  const options = getOptions(chartDatas);
  const data = getFilteredData(chartLabels, chartDatas);

  return {
    data,
    options,
  };
};
