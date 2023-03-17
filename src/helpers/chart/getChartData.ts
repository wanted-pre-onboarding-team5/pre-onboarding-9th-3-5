import { ChartData } from 'chart.js';

import type { ExtractedArrayData } from '../extractArrayFromResponse';
import type { ChartContext } from '@/types/chart';

import { CHART_BG_COLOR, LINE_CHART_BG_COLOR } from '@/constants/chart';
import { fillChartColor } from '@/helpers/chart/getChartColor';
import { ResponseData } from '@/types/responseData';

type MixedChartProps = {
  responseData: ResponseData;
  extractedDataArray: ExtractedArrayData;
};

const getChartData = ({ responseData, extractedDataArray }: MixedChartProps): ChartData => {
  const { labelArray, barDataArray, areaDataArray } = extractedDataArray;

  return {
    labels: labelArray,
    datasets: [
      {
        type: 'bar' as const,
        backgroundColor: (context: ChartContext) => {
          const { active, dataIndex } = context;
          const responseDataKey = labelArray[dataIndex];
          const placeKey = responseData[responseDataKey].id;
          if (active) return CHART_BG_COLOR[placeKey];
          return fillChartColor(placeKey);
        },
        label: 'value_bar',
        yAxisID: 'bar',
        data: barDataArray,
        borderWidth: 1,
      },
      {
        type: 'line' as const,
        backgroundColor: (context: ChartContext) => {
          const { active } = context;
          return active ? 'purple' : LINE_CHART_BG_COLOR;
        },
        borderColor: (context: ChartContext) => {
          const { active } = context;
          return active ? 'purple' : LINE_CHART_BG_COLOR;
        },
        label: 'value_area',
        yAxisID: 'line',
        data: areaDataArray,
        borderWidth: 2,
        fill: true,
        tension: 0.3,
      },
    ],
  };
};

export default getChartData;
