import { ChartOptions } from 'chart.js';
import { useNavigate } from 'react-router-dom';

import type { ExtractedArrayData } from '../extractArrayFromResponse';

import { CHART_BG_COLOR } from '@/constants/chart';

const getChartOptions = ({
  extractedDataArray,
}: {
  extractedDataArray: ExtractedArrayData;
}): ChartOptions => {
  const navigate = useNavigate();
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
    onClick(_, elements) {
      const element = elements[0];
      if (!element) {
        navigate(`?selectedId=ALL`);
        return;
      }
      const selectedId = idArray[element.index];
      navigate(`?selectedId=${selectedId}`);
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
