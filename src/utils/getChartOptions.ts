import { ChartOptions } from 'chart.js';

import { ProcessChartData } from '@/types';

import { REGION_COLOR, LINE_COLOR } from '@/constants/chart';

type Region = keyof typeof REGION_COLOR;

export const getChartOptions = (
  processChartData: ProcessChartData,
  handleFilter: (region: string) => void,
): ChartOptions => {
  return {
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
    onClick: (event, activeElements) => {
      if (activeElements.length > 0) {
        return handleFilter(processChartData.ids[activeElements[0].index]);
      }
      return handleFilter('전체');
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            const tooltipItem = tooltipItems[0];
            return `${tooltipItem.label}\n${processChartData.ids[tooltipItem.dataIndex]}`;
          },
          labelColor: (tooltipItem) => {
            if (tooltipItem.datasetIndex === 0) {
              return {
                borderColor: 'transparent',
                backgroundColor:
                  REGION_COLOR[processChartData.ids[tooltipItem.dataIndex] as Region],
              };
            }
            return {
              borderColor: 'transparent',
              backgroundColor: LINE_COLOR,
            };
          },
        },
      },
    },
  };
};
