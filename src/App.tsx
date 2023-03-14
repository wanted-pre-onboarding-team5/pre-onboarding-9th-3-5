import { Container } from '@mui/system';
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
  const [chartDatas, setChartDatas] = useState([]);
  interface ValuesType {
    id: string;
    value_area: number;
    value_bar: number;
  }
  const barValues: Array<number> = Object.values(chartDatas)?.map((i: ValuesType) => i.value_bar);
  const areaValues: Array<number> = Object.values(chartDatas)?.map((i: ValuesType) => i.value_area);
  const ids: Array<string> = Object.values(chartDatas)?.map((i: ValuesType) => i.id);
  const labels = Object.keys(chartDatas)?.map((i) => i);

  const coloringGuNames = ids.map((id) =>
    id === '중랑구'
      ? 'rgba(157, 203, 49, 0.5)'
      : id === '성북구'
      ? 'rgba(32, 127, 165, 0.5)'
      : id === '강남구'
      ? 'rgba(188, 49, 203, 0.5)'
      : 'rgba(230, 22, 50, 0.5)',
  );

  const options = {
    interaction: {
      intersact: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
      tooltip: {
        callbacks: {
          title: function (data) {
            return ids[data[0].dataIndex];
          },
        },
      },
    },
    scales: {
      bar: {
        min: 10000,
        max: 20000,
        position: 'left' as const,
      },
      area: {
        min: 0,
        max: 300,
        position: 'right' as const,
      },
    },
  };

  const FlexsysMockAPI = async () => {
    try {
      await fetch('http://127.0.0.1:5173/data.json', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => setChartDatas(data.response));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    FlexsysMockAPI();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'barValue',
        data: barValues,
        backgroundColor: coloringGuNames,
        yAxisId: 'bar',
      },
      {
        type: 'line' as const,
        fill: true,
        label: 'areaValue',
        data: areaValues,
        backgroundColor: 'gray',
        yAxisID: 'area',
        tension: 0.3,
        pointBorderColor: 'white',
        pointBackgroundColor: 'rgba(101, 6, 6, 0.5)',
      },
    ],
  };

  return (
    <Container maxWidth='xl'>
      <Chart type='bar' options={options} data={data} />
    </Container>
  );
}
