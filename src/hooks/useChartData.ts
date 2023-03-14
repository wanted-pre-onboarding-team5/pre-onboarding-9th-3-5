import { useEffect, useState } from 'react';

import { API_PATH } from '@/constants';
import { httpClient } from '@/utils';

export const useChartData = () => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { response } = await httpClient(API_PATH.data);
      setChartData(response);
    };

    fetchData();
  }, [setChartData]);

  return chartData;
};
