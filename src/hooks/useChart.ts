import { Chart } from 'chart.js';
import queryString from 'query-string';
import { useRef } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';

import { responseData } from '@/types';
import { ChartData } from '@/types';

import { getFilteredData, getOptions } from '../utils/chart';

export const useChart = () => {
  const { response } = useLoaderData() as responseData;
  const [searchParams, setSearchParams] = useSearchParams();
  const chartRef = useRef<Chart>(null);
  const { id: filterCondition } = queryString.parse(searchParams.toString());

  const chartLabels = Object.keys(response || {});
  const chartDatas: ChartData[] = Object.values(response || {});

  const options = getOptions(chartDatas);
  const data = getFilteredData(chartLabels, chartDatas, filterCondition as string);

  const handleButtonClick = (id: string) => {
    setSearchParams({ id });
  };

  const handleChartClick = () => {
    const { current: chart } = chartRef;
    if (!chart) return;
    setSearchParams({ id: chart.tooltip?.title[0] as string });
  };

  return {
    data,
    options,
    chartRef,
    handleButtonClick,
    handleChartClick,
  };
};
