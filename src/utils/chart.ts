import { Y_LABEL } from '@/constants';

import { fillChartColorById } from './chartColor';

import type { ChartData, ChartOptions, ScriptableContext, ChartType } from 'chart.js';

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
          if (active) return 'rgba(153, 102, 255, 1)';
          const responseDataKey = labels[dataIndex];
          return fillChartColorById(responseData, responseDataKey);
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

export const getChartOptions = (responseData: ResponseData): ChartOptions => {
  return {
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
