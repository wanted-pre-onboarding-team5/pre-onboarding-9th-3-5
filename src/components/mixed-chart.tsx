import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

import type { MockData } from '@/types/mock-data';
import type { QueryDataType } from '@/types/query-data';

import getChartColor from '@/helpers/get-chart-color';
import getChartData from '@/helpers/get-chart-data';

type MixedChartProps = {
  loaderData: MockData;
  queryData: QueryDataType;
};

const MixedChart = ({ loaderData, queryData }: MixedChartProps) => {
  const navigate = useNavigate();
  const { labelArray, idArray, areaDataArray, barDataArray } = getChartData(loaderData);

  return (
    <Chart
      type='bar'
      data={{
        labels: labelArray,
        datasets: [
          {
            backgroundColor: getChartColor(idArray, queryData?.selectedID),
            type: 'bar' as const,
            label: 'value_bar',
            yAxisID: 'bar',
            data: barDataArray,
            borderWidth: 1,
          },
          {
            backgroundColor: 'rgba(50, 183, 250, 0.15)',
            type: 'line' as const,
            label: 'value_area',
            yAxisID: 'line',
            data: areaDataArray,
            borderJoinStyle: 'round',
            borderWidth: 1,
            fill: 'origin',
            pointStyle: false,
            tension: 0.2,
          },
        ],
      }}
      options={{
        interaction: {
          mode: 'index',
        },
        scales: {
          x: {
            grid: {
              drawOnChartArea: false,
            },
          },
          bar: {
            type: 'linear',
            display: true,
            position: 'left',
            min: 10000,
            max: 20000,
          },
          line: {
            display: true,
            position: 'right',
            min: 0,
            max: 100,
          },
        },
        onClick(event, elements, chart) {
          event;
          chart;
          navigate(`?selectedID=${idArray[elements[0].index]}`);
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title(tooltipItems) {
                const tooltipItem = tooltipItems[0];
                return `${tooltipItem.label} (id: ${idArray[tooltipItem.dataIndex]})`;
              },
            },
          },
        },
      }}
    />
  );
};

export default MixedChart;
