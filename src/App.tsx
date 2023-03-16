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
import { useState } from 'react';
import { Chart } from 'react-chartjs-2';

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
import Filter from './components/Filter';
import { useValues } from './hooks/useValues';
import { getChartColor } from './utils/getChart';

export function App() {
  const chartData = useValues();
  const chartObj = chartData?.response;
  const barArrData: Array<number> = [];
  const areaArrData: Array<number> = [];

  chartObj &&
    Object.entries(chartObj).map(([key, value]) => {
      barArrData.push({ x: key, y: value.value_bar, z: value.id });
      areaArrData.push({ x: key, y: value.value_area, z: value.id });
    });

  const districtValues = Object.values(chartObj || {}).map((value) => value.id);

  const districtSet = new Set();
  for (const districtValue of districtValues) {
    districtSet.add(districtValue);
  }

  const districtColor = getChartColor(districtValues);
  const [filteredDistrict, setFilteredDistrict] = useState([]);

  const data = {
    datasets: [
      {
        type: 'line' as const,
        label: 'AreaData',
        borderColor: 'rgba(206, 206, 206, 0.855)',
        borderWidth: 0,
        fill: true,
        data: areaArrData,
        backgroundColor: 'rgba(185, 185, 185, 0.3)',
        pointStyle: false,
      },
      {
        type: 'bar' as const,
        label: 'BarData',
        backgroundColor: filteredDistrict.length !== 0 ? filteredDistrict : districtColor,
        data: barArrData,
        yAxisID: 'y_sub',
      },
    ],
  };

  const options = {
    pointBackgroundColor: function (chart) {
      const value = chart.dataset.data[chart.dataIndex];

      return value > 0 ? 'red' : 'blue';
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function (chart) {
            return chart[0].dataset.data[chart[0].dataIndex].z;
          },
        },
        legend: {
          display: false,
        },
      },
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
      <Filter
        districtValues={districtValues}
        filteredDistrict={filteredDistrict}
        setFilteredDistrict={setFilteredDistrict}
      />
      <Chart
        type='bar'
        data={data}
        options={options}
        filteredDistrict={filteredDistrict}
        setFilteredDistrict={setFilteredDistrict}
      />
    </>
  );
}

export default App;
