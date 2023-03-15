import { ChartData } from '@/types';

export const processData = (chartData: ChartData) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'value_bar',
        yAxisID: 'bar',
        data: chartData.barData,
        borderWidth: 1,
      },
      {
        type: 'line' as const,
        label: 'value_area',
        yAxisID: 'line',
        data: chartData.areaData,
        borderWidth: 1,
        fill: 'origin',
        pointStyle: false,
      },
    ],
  };

  return data;
};
