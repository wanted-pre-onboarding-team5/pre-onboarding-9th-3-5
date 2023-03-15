import { ChartData } from 'chart.js';

import { ProcessChartData } from '@/types';

export const getChartData = (processChartData: ProcessChartData): ChartData => {
  return {
    labels: processChartData.labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'value_bar',
        yAxisID: 'bar',
        data: processChartData.barData,
        borderWidth: 1,
      },
      {
        type: 'line' as const,
        label: 'value_area',
        yAxisID: 'line',
        data: processChartData.areaData,
        borderWidth: 1,
        fill: 'origin',
        pointStyle: false,
      },
    ],
  };
};
