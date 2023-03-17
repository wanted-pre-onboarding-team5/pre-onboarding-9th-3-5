import { ChartOptions } from 'chart.js';
import { useNavigate } from 'react-router-dom';

import type { ExtractedArrayDataType } from '../extractArrayFromResponse';

const getChartOptions = ({
  extractedDataArray,
}: {
  extractedDataArray: ExtractedArrayDataType;
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
    onClick(event, elements, chart) {
      event;
      chart;
      navigate(`?selectedId=${idArray[elements[0].index]}`);
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
  };
};

export default getChartOptions;
