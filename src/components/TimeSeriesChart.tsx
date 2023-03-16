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
  Filler,
  ChartOptions,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';

import { ChartDataSet } from '@/types/chart';
import { getChartData, getChartOptions } from '@/utils/chartHelpers';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController,
);

const RegionButton = ({ region, selectedRegion, setSelectedRegion }) => {
  const handleClick = () => {
    setSelectedRegion(region);
  };

  return (
    <button
      onClick={handleClick}
      style={{ fontWeight: selectedRegion === region ? 'bold' : 'normal' }}
    >
      {region}
    </button>
  );
};

export const TimeSeriesChart = ({ chartData }: ChartDataSet) => {
  const [data, setData] = useState<ChartData>();
  const [options, setOptions] = useState<ChartOptions>();
  const [selectedRegion, setSelectedRegion] = useState<string>();

  useEffect(() => {
    const getChart = async () => {
      const labels = Object.keys(chartData);
      const areaData = labels.map((label) => chartData[label].value_area);
      const barData = labels.map((label) => chartData[label].value_bar);

      setData(getChartData(labels, areaData, barData, selectedRegion));
      setOptions(
        getChartOptions((label: string) => {
          if (label === selectedRegion) {
            const chart = chartData[label];
            return [chart.id, `value_bar : ${chart.value_bar}`, `value_area : ${chart.value_area}`];
          }
        }, setSelectedRegion),
      );
    };

    getChart();
  }, [chartData, selectedRegion]);

  return (
    <>
      {selectedRegion && (
        <div>
          {Object.keys(chartData).map((region) => (
            <RegionButton
              key={region}
              region={region}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
          ))}
        </div>
      )}
      {data && <Chart type='bar' data={data} options={options} />}
    </>
  );
};

export default TimeSeriesChart;
