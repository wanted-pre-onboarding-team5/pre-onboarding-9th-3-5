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
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import { useLoaderData } from 'react-router-dom';

import { convert, getChartData, getKeysFromObj, getChartOptions } from '@/utils';

import { ResponseData } from '@/types/ResponseDataType';

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
);

export const Root = () => {
  const { response } = useLoaderData() as ResponseData;
  const [initialData, setInitialData] = useState(null);
  const [options, setOptions] = useState({});

  useEffect(() => {
    const labels = getKeysFromObj(response);
    const valueArea = convert(response, labels, 'value_area');
    const valueBar = convert(response, labels, 'value_bar');
    const dataObj = getChartData(labels, valueArea, valueBar);
    setInitialData(dataObj);
    const chartOptions = getChartOptions(response);
    setOptions(chartOptions);
  }, [response]);

  return <div>{initialData && <Chart type='bar' options={options} data={initialData} />}</div>;
};
