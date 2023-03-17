import { ChartData } from 'chart.js';

import type { ExtractedArrayDataType } from '../extractArrayFromResponse';
import type { QueryData } from '@/types/queryData';

import getChartColor from '@/helpers/chart/getChartColor';

type MixedChartProps = {
  extractedDataArray: ExtractedArrayDataType;
  queryData: QueryData;
};

const getChartData = ({ extractedDataArray, queryData }: MixedChartProps): ChartData => {
  const { labelArray, idArray, barDataArray, areaDataArray } = extractedDataArray;

  return {
    labels: labelArray,
    datasets: [
      {
        backgroundColor: getChartColor(idArray, queryData?.selectedId),
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
  };
};

export default getChartData;
