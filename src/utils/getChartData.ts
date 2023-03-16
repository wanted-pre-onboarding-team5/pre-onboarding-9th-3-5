import { ChartData } from 'chart.js';

import { ProcessChartData } from '@/types';

import { transparentize } from './transparentize';

import { REGION_COLOR, LINE_COLOR, CHART_OPACITY } from '@/constants/chart';

type Region = keyof typeof REGION_COLOR;

export const getChartData = (
  processChartData: ProcessChartData,
  selectedRegion: string,
): ChartData => {
  return {
    labels: processChartData.labels,
    datasets: [
      {
        backgroundColor: processChartData.ids.map((region) =>
          transparentize(
            REGION_COLOR[region as Region],
            selectedRegion === '전체'
              ? CHART_OPACITY.default
              : selectedRegion === region
              ? CHART_OPACITY.selected
              : CHART_OPACITY.unselected,
          ),
        ),
        type: 'bar' as const,
        label: 'value_bar',
        yAxisID: 'bar',
        data: processChartData.barData,
        borderWidth: 1,
      },
      {
        backgroundColor: transparentize(LINE_COLOR, CHART_OPACITY.line),
        type: 'line' as const,
        label: 'value_area',
        yAxisID: 'line',
        data: processChartData.areaData,
        borderWidth: 1,
        fill: 'origin',
        pointStyle: false,
      },
    ],
  };
};
