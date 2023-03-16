import { MockData, ProcessChartData } from '@/types';

import { getChartData } from './getChartData';
import { getChartOptions } from './getChartOptions';

export const createChartData = (
  mockData: MockData,
  selectedRegion: string,
  handleFilter: (region: string) => void,
) => {
  const processChartData: ProcessChartData = {
    labels: [],
    ids: [],
    areaData: [],
    barData: [],
  };

  Object.entries(mockData).forEach(([key, item]) => {
    processChartData.labels.push(key);
    processChartData.ids.push(item.id);
    processChartData.areaData.push(item.value_area);
    processChartData.barData.push(item.value_bar);
  });

  const data = getChartData(processChartData, selectedRegion);
  const options = getChartOptions(processChartData, handleFilter);

  return { data, options };
};
