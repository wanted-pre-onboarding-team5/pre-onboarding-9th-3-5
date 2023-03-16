import { Chart as ChartJS, ChartOptions, ChartData } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import {} from 'chart.js';

interface MixedChartProps {
  data: ChartData;
  options: ChartOptions;
  chartRef: React.RefObject<ChartJS>;
  onClick: () => void;
}

export const MixedChart = ({ data, options, chartRef, onClick }: MixedChartProps) => {
  return <Chart type='bar' data={data} options={options} onClick={onClick} ref={chartRef} />;
};
