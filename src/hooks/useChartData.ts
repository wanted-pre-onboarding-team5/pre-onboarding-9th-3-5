import { useEffect, useState } from 'react';

import { API_PATH } from '@/constants';
import { httpClient, createChartData } from '@/utils';

export const useChartData = () => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { response } = await httpClient(API_PATH.data);
      setChartData(createChartData(response));
    };

    fetchData();
  }, [setChartData]);

  return chartData;
};
