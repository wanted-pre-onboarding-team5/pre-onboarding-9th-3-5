import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import type { FlexsysApi } from '@/types/responseData';

import extractChartDataAndOptions from '@/helpers/chart/extractChartDataAndOptions';
import { ChartClick } from '@/types/chart';

type MixedChartProps = {
  loaderData: FlexsysApi;
  onClick: ChartClick;
};

const MixedChart = ({ loaderData, onClick }: MixedChartProps) => {
  const { data, options } = extractChartDataAndOptions(loaderData, onClick);

  return <Chart type='bar' data={data} options={options} />;
};

export default MixedChart;
