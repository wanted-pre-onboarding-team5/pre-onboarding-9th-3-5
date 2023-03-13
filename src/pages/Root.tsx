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

import { CHART_OPTIONS } from '@/constants';
import { convert, getChartData, getKeysFromObj } from '@/utils';

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

  useEffect(() => {
    const labels = getKeysFromObj(response);
    const valueArea = convert(response, labels, 'value_area');
    const valueBar = convert(response, labels, 'value_bar');
    const dataObj = getChartData(labels, valueArea, valueBar);
    setInitialData(dataObj);
  }, [response]);

  return (
    <div>{initialData && <Chart type='bar' options={CHART_OPTIONS} data={initialData} />}</div>
  );
};
