import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import { useValues } from './hooks/useValues';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController,
);

export function App() {
  const chartData = useValues();
  const chartObj = chartData?.response;
  const barArrData = [];
  const areaArrData = [];

  Object.entries(chartObj || {}).map(([key, value]) =>
    barArrData.push({ x: key, y: value.value_bar, z: value.id }),
  );

  Object.entries(chartObj || {}).map(([key, value]) =>
    areaArrData.push({ x: key, y: value.value_area, z: value.id }),
  );

  const districtValues = Object.values(chartObj || {}).map((value) => value.id);

  const districtSet = new Set();
  for (const districtValue of districtValues) {
    districtSet.add(districtValue);
  }

  const colorMap = {
    강남구: '#ff9999',
    노원구: '#91c6e9',
    성북구: '#ffdd86',
    중랑구: '#8fe6b3',
  };

  const colors = [...districtSet].map((i) => colorMap[i]);

  const data = {
    datasets: [
      {
        type: 'line' as const,
        label: 'AreaData',
        borderColor: 'rgb(206, 206, 206)',
        borderWidth: 2,
        fill: true,
        data: areaArrData,
        backgroundColor: 'rgba(185, 185, 185, 0.2)',
      },
      {
        type: 'bar' as const,
        label: 'BarData',
        backgroundColor: colors,
        data: barArrData,
        yAxisID: 'y_sub',
      },
    ],
  };

  const options = {
    interaction: {
      mode: 'index',
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function (context) {
            return context[0].dataset.data[context[0].dataIndex].z;
          },
        },
      },
      legend: { display: false },
      title: {
        display: true,
        text: 'Test chart',
        position: 'top',
      },
    },
    y: {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        align: 'end',
      },
      ticks: {
        stepSize: 10,
      },
      min: 0,
      max: 100,
    },
    y_sub: {
      position: 'right',
      title: {
        display: true,
        align: 'end',
      },
      ticks: {
        stepSize: 1000,
      },
      min: 10000,
      max: 20000,
    },
  };

  return (
    <>
      <Chart type='bar' data={data} options={options} />
    </>
  );
}

export default App;
