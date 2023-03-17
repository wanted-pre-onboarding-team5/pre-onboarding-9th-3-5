import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import type { QueryData } from '@/types/queryData';
import type { FlexsysApi } from '@/types/responseData';

import extractChartDataAndOptions from '@/helpers/chart/extractChartDataAndOptions';

type MixedChartProps = {
  loaderData: FlexsysApi;
  queryData: QueryData;
};

const MixedChart = ({ loaderData, queryData }: MixedChartProps) => {
  const { data, options } = extractChartDataAndOptions(loaderData, queryData);

  return <Chart type='bar' data={data} options={options} />;
};

export default MixedChart;
