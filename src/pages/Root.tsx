import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import { useLoaderData } from 'react-router-dom';

import { extractValueFromResponse, getChartData, getKeysFromObj, getChartOptions } from '@/utils';

import type { ChartData } from 'chart.js';

import { FlexsysApi } from '@/types/ResponseDataType';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
);

export const Root = () => {
  const { response } = useLoaderData() as FlexsysApi;
  const [chartDataState, setChartDataState] = useState<null | ChartData>(null);
  const [options, setOptions] = useState({});

  useEffect(() => {
    const labels = getKeysFromObj(response);
    const valueArea = extractValueFromResponse(response, labels, 'value_area');
    const valueBar = extractValueFromResponse(response, labels, 'value_bar');
    const chartData = getChartData(response, labels, valueArea, valueBar);
    setChartDataState(chartData);
    const chartOptions = getChartOptions(response);
    setOptions(chartOptions);
  }, [response]);

  return (
    <div>{chartDataState && <Chart type='bar' options={options} data={chartDataState} />}</div>
  );
};
