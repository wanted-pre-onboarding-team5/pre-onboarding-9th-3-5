import { Typography } from '@mui/joy';
import { Box } from '@mui/material';
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
import { Chart } from 'react-chartjs-2';
import { useLoaderData } from 'react-router-dom';

import { extractValueFromResponse, getChartData, getKeysFromObj, getChartOptions } from '@/utils';

import { Filter } from '@/components/Filter';
import { useFilterChart } from '@/hooks/useFilterChart';
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
  const labels = getKeysFromObj(response);
  const valueArea = extractValueFromResponse(response, labels, 'value_area');
  const valueBar = extractValueFromResponse(response, labels, 'value_bar');

  const { currentFilter, handleFilterChange, handleChartClick } = useFilterChart(labels, response);
  const chartData = getChartData(response, labels, valueArea, valueBar);
  const chartOptions = getChartOptions(response, handleChartClick);

  return (
    <>
      <Typography level='display2'>Flexsys Chart</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Filter currentFilter={currentFilter} onChange={handleFilterChange} />
      </Box>
      <Chart type='bar' options={chartOptions} data={chartData} />
    </>
  );
};
