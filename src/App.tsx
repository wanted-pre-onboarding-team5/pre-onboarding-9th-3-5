import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
);

export function App() {
  const [item, setItem] = useState([]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
    scales: {
      bar: {
        min: 10000,
        max: 20000,
        display: true,
        position: 'left' as const,
        grid: {
          drawOnChartArea: true,
          color: 'red',
        },
      },
      area: {
        min: 0,
        max: 100,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: true,
        },
      },
    },
  };

  const FlexsysMockAPI = async () => {
    try {
      await fetch('http://127.0.0.1:5173/data.json', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => setItem(data.response));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    FlexsysMockAPI();
  }, []);

  interface ValuesType {
    id: string;
    value_area: number;
    value_bar: number;
  }

  const barValues = Object.values(item)?.map((i: ValuesType) => i.value_bar);
  const areaValues = Object.values(item)?.map((i: ValuesType) => i.value_area);
  const labels = Object.keys(item)?.map((i) => i);

  const data = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'barValue',
        data: barValues,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisId: 'bar',
      },
      {
        type: 'line' as const,
        fill: true,
        label: 'areaValue',
        data: areaValues,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'area',
      },
    ],
  };

  return <Chart type='bar' options={options} data={data} />;
}
