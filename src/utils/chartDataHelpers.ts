import { MockData, ChartData } from '@/types';

import { getOptions } from './getOption';
import { processData } from './processData';

export const chartDataHelpers = (mockData: MockData) => {
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

  const data = processData(chartData);
  const options = getOptions(chartData.ids);

  return { data, options };
};
