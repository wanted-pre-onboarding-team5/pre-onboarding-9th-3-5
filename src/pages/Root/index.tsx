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
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';

import { coloringGuNames } from '@/utils/coloringGuNames';
import { FlexsysMockAPI } from '@/utils/fetch';

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

export function Root() {
  const [chartDatas, setChartDatas] = useState([]);

  let didInit = false;

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      const fetchMockAPI = async () => {
        const { response } = await FlexsysMockAPI('http://127.0.0.1:5173/data.json', {
          method: 'GET',
        });
        setChartDatas(response);
      };
      fetchMockAPI();
    }
  }, []);

  interface ValuesType {
    id: string;
    value_area: number;
    value_bar: number;
  }
  const barValues: Array<number> = Object.values(chartDatas)?.map((i: ValuesType) => i.value_bar);
  const areaValues: Array<number> = Object.values(chartDatas)?.map((i: ValuesType) => i.value_area);
  const ids: Array<string> = Object.values(chartDatas)?.map((i: ValuesType) => i.id);
  const labels = Object.keys(chartDatas)?.map((i) => i);
  const coloringGu = coloringGuNames(ids);

  const options = {
    interaction: {
      intersect: false,
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
            return `${ids[data[0].dataIndex]}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
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

  const data = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'barValue',
        data: barValues,
        backgroundColor: coloringGu,
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
  return <Chart type='bar' options={options} data={data} />;
}
