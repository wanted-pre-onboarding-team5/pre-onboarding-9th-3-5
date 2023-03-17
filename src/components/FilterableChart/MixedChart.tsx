import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import type { FlexsysApi } from '@/types/responseData';

import extractChartDataAndOptions from '@/helpers/chart/extractChartDataAndOptions';

type MixedChartProps = {
  loaderData: FlexsysApi;
};

const MixedChart = ({ loaderData }: MixedChartProps) => {
  const { data, options } = extractChartDataAndOptions(loaderData);

  return <Chart type='bar' data={data} options={options} />;
};

export default MixedChart;
