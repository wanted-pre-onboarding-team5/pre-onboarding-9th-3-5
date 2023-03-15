import { ProcessChartData } from '@/types';

export const getChartOptions = (processChartData: ProcessChartData) => {
  return {
    interaction: {
      mode: 'index',
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      bar: {
        type: 'linear',
        display: true,
        position: 'left',
        min: 10000,
        max: 20000,
      },
      line: {
        display: true,
        position: 'right',
        min: 0,
        max: 100,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            const tooltipItem = tooltipItems[0];
            return `${tooltipItem.label}\n${processChartData.ids[tooltipItem.dataIndex]}`;
          },
        },
      },
    },
  };
};
