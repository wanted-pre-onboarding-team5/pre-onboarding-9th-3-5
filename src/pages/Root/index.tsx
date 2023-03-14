import { useLoaderData } from 'react-router-dom';

import TimeSeriesChart from '@/components/TimeSeriesChart';
import { ChartDataSet } from '@/types/chart';

export const Root = () => {
  const { response } = useLoaderData() as ChartDataSet;

  return (
    <>
      <TimeSeriesChart chartData={response} />
    </>
  );
};
