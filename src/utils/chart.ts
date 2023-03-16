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
  TooltipItem,
  ChartTypeRegistry,
} from 'chart.js';

import { ChartData } from '@/types';

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

Tooltip.positioners.custom = function (_, eventPosition) {
  return {
    x: eventPosition.x,
    y: eventPosition.y,
  };
};

export const getOptions = (datas: ChartData[]) => ({
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      position: 'custom' as const,
      callbacks: {
        title: function (TooltipItem: TooltipItem<keyof ChartTypeRegistry>[]) {
          return `${datas[TooltipItem[0].dataIndex].id}`;
        },
      },
    },
  },
  interaction: {
    mode: 'x' as const,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    area: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    bar: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      min: 10000,
    },
  },
  parsing: {
    yAxisKey: 'value',
  },
});

export const getFilteredData = (labels: string[], datas: ChartData[], condition?: string) => {
  const themes = {
    성북구: 'rgb(255, 139, 139)',
    강남구: 'rgb(177, 254, 139)',
    노원구: 'rgb(136, 255, 255)',
    중랑구: 'rgb(216, 152, 255)',
  };

  return {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'area',
        borderColor: 'rgb(167, 167, 167,0.5)',
        backgroundColor: 'rgba(218, 218, 218, 0.2)',
        pointBorderColor: 'rgba(256,256,256,0)',
        pointBackgroundColor: 'rgba(256,256,256,0)',
        borderWidth: 2,
        fill: true,
        data: datas.map((data) => data.value_area),
        tension: 0.3,
        yAxisID: 'area',
      },
      {
        type: 'bar' as const,
        label: 'bar',
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: datas.map((data) => {
          if (!condition) return themes[data.id as keyof typeof themes];
          if (condition === data.id) return themes[data.id as keyof typeof themes];
          return 'rgb(167, 167, 167, 0.5)';
        }),
        data: datas.map((data) => data.value_bar),
        yAxisID: 'bar',
      },
    ],
  };
};
