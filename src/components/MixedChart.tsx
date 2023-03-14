import { Chart } from 'react-chartjs-2';

import { useChart } from '../hooks/useChart';

export const MixedChart = () => {
  const { data, options } = useChart();

  return <Chart type='bar' data={data} options={options} />;
};
