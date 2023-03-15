import { ChartData, ChartOptions } from 'chart.js';
import { useEffect, useState } from 'react';

import { API_PATH } from '@/constants';
import { httpClient, createChartData } from '@/utils';

export const useChartData = () => {
  const [data, setData] = useState<ChartData>();
  const [options, setOptions] = useState<ChartOptions>();

  useEffect(() => {
    const fetchData = async () => {
      const { response } = await httpClient(API_PATH.data);
      const chartData = createChartData(response);
      setData(chartData.data);
      setOptions(chartData.options);
    };

    fetchData();
  }, [setData, setOptions]);

  return [data, options];
};
