import getChartColor from './get-chart-color';

import type { MockData } from '@/types/mock-data';

type ChartData = {
  labelArray: string[];
  idArray: string[];
  areaDataArray: string[];
  barDataArray: string[];
  barBgArray: string[];
};

const getChartData = (mockData: MockData) => {
  const chartData: ChartData = {
    labelArray: [],
    idArray: [],
    areaDataArray: [],
    barDataArray: [],
    barBgArray: [],
  };

  for (const [key, value] of Object.entries(mockData.response)) {
    const { id, value_area, value_bar } = value;
    chartData.labelArray.push(key);
    chartData.idArray.push(id);
    chartData.areaDataArray.push(String(value_area));
    chartData.barDataArray.push(String(value_bar));
  }

  chartData.barBgArray = [...getChartColor(chartData.idArray)];
  return chartData;
};

export default getChartData;
