import type { MockData } from '@/types/mock-data';

type ChartData = {
  labelArray: string[];
  idArray: string[];
  areaDataArray: string[];
  barDataArray: string[];
};

const getChartData = (mockData: MockData) => {
  const chartData: ChartData = {
    labelArray: [],
    idArray: [],
    areaDataArray: [],
    barDataArray: [],
  };

  for (const [key, value] of Object.entries(mockData.response)) {
    const { id, value_area, value_bar } = value;
    chartData.labelArray.push(key);
    chartData.idArray.push(id);
    chartData.areaDataArray.push(String(value_area));
    chartData.barDataArray.push(String(value_bar));
  }

  return chartData;
};

export default getChartData;
