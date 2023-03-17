import { ChartOptions } from 'chart.js';

import type { ExtractedArrayData } from '../extractArrayFromResponse';

import { CHART_BG_COLOR } from '@/constants/chart';
import { ChartClick } from '@/types/chart';

const getChartOptions = (
  extractedDataArray: ExtractedArrayData,
  onClick: ChartClick,
): ChartOptions => {
  const { idArray } = extractedDataArray;

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
      },
      line: {
        display: true,
        position: 'right',
      },
    },
    onClick: (_, elements) => onClick(_, elements, idArray),
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
          labelColor: (tooltipItem) => {
            if (tooltipItem.datasetIndex === 0) {
              return {
                borderColor: 'transparent',
                backgroundColor: CHART_BG_COLOR[idArray[tooltipItem.dataIndex]],
              };
            }
          },
        },
      },
    },
  };
};

export default getChartOptions;
