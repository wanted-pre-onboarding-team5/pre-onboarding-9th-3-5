import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import type { MockDataType } from '@/types/mockData';
import type { QueryDataType } from '@/types/queryData';

import extractChartDataAndOptions from '@/helpers/chart/extractChartDataAndOptions';

type MixedChartProps = {
  loaderData: MockDataType;
  queryData: QueryDataType;
};

const MixedChart = ({ loaderData, queryData }: MixedChartProps) => {
  const { data, options } = extractChartDataAndOptions(loaderData, queryData);

  return <Chart type='bar' data={data} options={options} />;
};

export default MixedChart;
