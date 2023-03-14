import { MockData, ChartData } from '@/types';

import { getOptions } from './getOption';

export const processChartData = (mockData: MockData) => {
  const chartData: ChartData = {
    labels: [],
    ids: [],
    areaData: [],
    barData: [],
  };

  Object.entries(mockData).forEach(([key, item]) => {
    chartData.labels.push(key);
    chartData.ids.push(item.id);
    chartData.areaData.push(item.value_area);
    chartData.barData.push(item.value_bar);
  });

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

  const options = getOptions(chartData.ids);

  return { data, options };
};
