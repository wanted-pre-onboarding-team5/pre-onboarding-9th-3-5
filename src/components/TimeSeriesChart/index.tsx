import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
);

interface TimeSeriesChartProps {
  chartData: ChartData;
  chartOptions: ChartOptions;
}

const TimeSeriesChart = ({ chartData, chartOptions }: TimeSeriesChartProps) => {
  return <Chart type='bar' data={chartData} options={chartOptions} />;
};

export default TimeSeriesChart;
