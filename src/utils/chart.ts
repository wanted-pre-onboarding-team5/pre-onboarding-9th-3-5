import { CHART_SELECTED_COLOR, Y_LABEL } from '@/constants';

import { fillChartColor } from './chartColor';

import type { ChartData, ChartOptions, ScriptableContext, ChartType } from 'chart.js';

import { ChartClick } from '@/hooks/useFilterChart';
import { ResponseData } from '@/types/ResponseDataType';

type YLabel = (typeof Y_LABEL)[keyof typeof Y_LABEL];
type ChartContext = ScriptableContext<ChartType>;

export const getKeysFromObj = (obj = {}) => {
  return Object.keys(obj);
};

export const extractValueFromResponse = (
  responseData: ResponseData,
  xLabels: string[],
  yLabel: YLabel,
) => {
  return xLabels.map((xLabel) => responseData[xLabel][yLabel]);
};

export const getChartData = (
  responseData: ResponseData,
  labels: string[],
  areaData: number[],
  barData: number[],
): ChartData => {
  return {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'Value_Bar',
        data: barData,
        backgroundColor: (context: ChartContext) => {
          const { active, dataIndex } = context;
          const responseDataKey = labels[dataIndex];
          const placeKey = responseData[responseDataKey].id;
          if (active) return CHART_SELECTED_COLOR[placeKey];
          return fillChartColor(placeKey);
        },
        yAxisID: 'y2',
      },
      {
        type: 'line' as const,
        label: 'Value_Area',
        data: areaData,
        borderColor: (context: ChartContext) => {
          const { active } = context;
          return active ? 'purple' : 'rgb(227, 179, 242, 0.8)';
        },
        backgroundColor: (context: ChartContext) => {
          const { active } = context;
          return active ? 'purple' : 'rgb(227, 179, 242, 0.8)';
        },
        fill: true,
        borderWidth: 2,
        yAxisID: 'y1',
      },
    ],
  };
};

export const getChartOptions = (responseData: ResponseData, onClick: ChartClick): ChartOptions => {
  return {
    onClick,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Chart',
      },
      tooltip: {
        callbacks: {
          label: function ({ label }: { label: string }) {
            const { id, value_area, value_bar } = responseData[label];
            const text = `[${id}] 🟣Value_Area: ${value_area} 🟡Value_Bar: ${value_bar}`;
            return text;
          },
        },
      },
    },
    scales: {
      y1: {
        position: 'left',
      },
      y2: {
        position: 'right',
      },
    },
  };
};
